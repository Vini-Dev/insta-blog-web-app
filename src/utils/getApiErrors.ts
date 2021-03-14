interface Errors {
  field: string;
  message: string;
}

interface Params {
  [key: string]: any;
}

interface FunctionReturns {
  [key: string]: any;
}

const getApiErrors = (errors: Params): FunctionReturns => {
  const fieldErrors = {};

  if (errors?.response?.status === 422 && errors?.response?.data) {
    errors.response.data.forEach((error: Errors) => {
      fieldErrors[error.field] = error.message;
    });

    return fieldErrors;
  }

  return fieldErrors;
};

export default getApiErrors;
