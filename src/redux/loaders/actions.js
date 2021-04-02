export const types = {
  TOGGLE_LOADER_STATE: "TOGGLE_LOADER_STATE"
};

export const getToggleLoaderAction = (loaderName) => ({
  type: types.TOGGLE_LOADER_STATE,
  payload: {
    loaderName
  }
});
