import { types } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_ATTRIBUTE_VALUE: {
      const { productId, attributeId, value } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [productId]: {
            ...state.productId,
            attributes: {
              ...state.byId[productId]?.attributes,
              [attributeId]: value
            }
          }
        }
      };
    }

    default:
      return state;
  }
};
