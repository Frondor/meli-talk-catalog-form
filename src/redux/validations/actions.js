export const types = {
  SET_VALIDATION_ERRORS: "SET_VALIDATION_ERRORS",
  RESET_VALIDATION_ERRORS: "RESET_VALIDATION_ERRORS"
};

export const getSetValidationErrorsAction = (productId, errors) => ({
  type: types.SET_VALIDATION_ERRORS,
  payload: {
    productId,
    errors
  }
});

export const getResetValidationErrorsAction = (productId) => ({
  type: types.RESET_VALIDATION_ERRORS,
  payload: {
    productId
  }
});
