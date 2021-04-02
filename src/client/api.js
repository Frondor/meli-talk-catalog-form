const post = ({ mockedResponse }) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(mockedResponse), 1200)
  );
};

export const validateProduct = (product) => {
  const errors = {};

  Object.entries(product).forEach(([attrId, value]) => {
    switch (typeof value) {
      case "string": {
        if (value.includes(".")) {
          errors[attrId] = `Este atributo no debe contener puntos`;
        }
        break;
      }

      case "object": {
        if (!value?.number || Number.isNaN(Number(value.number))) {
          errors[attrId] = `El valor de este atributo es inválido`;
        }
        break;
      }

      default:
        break;
    }
  });

  return post({
    mockedResponse: { errors }
  });
};
