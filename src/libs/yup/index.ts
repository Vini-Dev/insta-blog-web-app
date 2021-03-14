import * as yup from 'yup';

import equal from './custom-methods/equal';

/**
 * Custom validations
 */
yup.addMethod(yup.string, 'equal', equal);

export default yup;

/**
 * Helpers
 */
export const defaultOptions = {
  stripUnknown: true,
  abortEarly: false,
};

interface FormatErrors {
  [key: string]: any;
}

interface FormatErrorsParams {
  path: string;
  message: string;
}

export const formatErrors = (errors: FormatErrorsParams[]): FormatErrors => {
  const validationErrors = {};

  errors?.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
};
