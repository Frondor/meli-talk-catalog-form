export const types = {
  SET_ATTRIBUTE_VALUE: "SET_ATTRIBUTE_VALUE"
};

export const getSetAttributeValueAction = ({
  productId,
  attributeId,
  value
}) => ({
  type: types.SET_ATTRIBUTE_VALUE,
  payload: {
    productId,
    attributeId,
    value
  }
});
