export const getProductsState = (state) => state.products;

export const getProductState = (state, productId) =>
  getProductsState(state).byId[productId];

export const getProductAttributeValues = (state, productId) =>
  getProductState(state, productId).attributes || {};

export const getProductAttributeValue = (state, productId, attributeId) =>
  getProductAttributeValues(state, productId)[attributeId];
