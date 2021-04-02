export const getLoadersState = (state) => state.loaders;

export const isLoading = (state, name) => !!getLoadersState(state)[name];
