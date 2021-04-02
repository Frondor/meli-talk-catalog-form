import { connect } from "react-redux";
import { validateProduct } from "../../client/api";
import { getDomainAttributes } from "../../redux/domain/selectors";
import { getToggleLoaderAction } from "../../redux/loaders/actions";
import { getSetAttributeValueAction } from "../../redux/products/actions";
import { getProductAttributeValues } from "../../redux/products/selectors";
import { isLoading } from "../../redux/loaders/selectors";
import {
  getResetValidationErrorsAction,
  getSetValidationErrorsAction
} from "../../redux/validations/actions";
import NumberUnitControl from "../form-controls/number-unit";
import TextControl from "../form-controls/text";
import Form from "./form";
import { getAttributeValidationMessage } from "../../redux/validations/selectors";

const PRODUCT_FORM_LOADER_NAME = "product_form";

const getControlComponent = (attribute) => {
  switch (attribute.type.catalog_id) {
    case "NUMBER_UNIT":
      return NumberUnitControl;

    default:
      return TextControl;
  }
};

const calcFieldsFromState = (state, productId) =>
  getDomainAttributes(state).map((attribute) => ({
    Component: getControlComponent(attribute),
    attribute,
    message: getAttributeValidationMessage(state, productId, attribute.id)
  }));

const mapStateToProps = (state, { productId }) => ({
  fields: calcFieldsFromState(state, productId),
  values: getProductAttributeValues(state, productId),
  isLoading: isLoading(state, PRODUCT_FORM_LOADER_NAME)
});

const mapDispatchToProps = (dispatch, { productId }) => ({
  setAttributeValue: (attributeId, value) =>
    dispatch(
      getSetAttributeValueAction({
        productId,
        attributeId,
        value
      })
    ),
  onSubmit: async (ev) => {
    ev.preventDefault();
    dispatch(async (_, getState) => {
      const state = getState();
      dispatch(getResetValidationErrorsAction(productId));
      dispatch(getToggleLoaderAction(PRODUCT_FORM_LOADER_NAME));
      const { errors } = await validateProduct(
        getProductAttributeValues(state, productId)
      );

      dispatch(getSetValidationErrorsAction(productId, errors));
      dispatch(getToggleLoaderAction(PRODUCT_FORM_LOADER_NAME));
    });
  }
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
