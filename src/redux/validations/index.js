import { types } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_VALIDATION_ERRORS: {
      const { productId, errors } = action.payload;
      return {
        ...state,
        errors: {
          [productId]: errors
        }
      };
    }

    case types.RESET_VALIDATION_ERRORS: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.productId]: {}
        }
      };
    }

    default:
      return state;
  }
};
