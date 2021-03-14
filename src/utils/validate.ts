// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validate = async (schema, data, options) => {
  try {
    const validateOptions = {
      stripUnknown: true,
      abortEarly: false,
      ...options,
    };

    const result = await schema.validate(data, validateOptions);

    return { data: result, errors: null };
  } catch (errors) {
    const validationErrors = {};

    errors?.inner?.forEach((error) => {
      validationErrors[error.path] = error.message;
    });

    return { data: null, errors: validationErrors };
  }
};

export default validate;
