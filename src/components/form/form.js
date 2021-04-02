import React from "react";
import classnames from "classnames";
import FormField from "../form-field";
import Button from "../button";

export default class Form extends React.Component {
  render() {
    const {
      fields,
      setAttributeValue,
      values,
      onSubmit,
      isLoading
    } = this.props;
    return (
      <form
        className={classnames("product-form", {
          "product-form--disabled": isLoading
        })}
        onSubmit={onSubmit}
      >
        {fields.map(({ Component, attribute, message }) => (
          <FormField attribute={attribute} message={message} key={attribute.id}>
            <Component
              attribute={attribute}
              value={values[attribute.id]}
              onChange={(value) => setAttributeValue(attribute.id, value)}
            />
          </FormField>
        ))}

        <Button type="submit" className="product-form__submit-btn">
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    );
  }
}
