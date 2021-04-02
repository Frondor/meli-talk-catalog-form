export const getValidationsState = (state) => state.validations || {};

export const getValidationErrors = (state) => getValidationsState(state).errors;

export const getAttributeValidationMessage = (state, productId, attributeId) =>
  getValidationErrors(state)?.[productId]?.[attributeId];
