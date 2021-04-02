export const getDomainState = (state) => state.domain;

export const getDomainAttributes = (state) => getDomainState(state).attributes;

export const getDomainAttributesById = (state) =>
  getDomainAttributes(state).reduce(
    (hash, attr) => Object.assign(hash, { [attr.id]: attr }),
    {}
  );

export const getAttributeConfig = (state, attrId) =>
  getDomainAttributesById(state)[attrId];
