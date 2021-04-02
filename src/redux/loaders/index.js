import { types } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case types.TOGGLE_LOADER_STATE:
      const { loaderName } = action.payload;
      return {
        ...state,
        [loaderName]: !state[loaderName]
      };

    default:
      return state;
  }
};
