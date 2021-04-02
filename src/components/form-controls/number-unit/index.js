import React from "react";
import classnames from "classnames";
import SelectControl from "../select";
import TextControl from "../text";

export default class NumberUnitControl extends React.Component {
  constructor(props) {
    super(props);

    this.getOnChangeHandler = this.getOnChangeHandler.bind(this);
  }

  getOptionsFromAttribute({ type = {} }) {
    const { allowed_units = [], default_unit } = type;
    const options = allowed_units.map((name) => ({
      name,
      value: name
    }));

    return {
      options,
      defaultOption: default_unit
    };
  }

  static withDefaults(value = {}, defaultUnit) {
    return {
      number: value.number || "",
      unit: value.unit || defaultUnit
    };
  }

  getOnChangeHandler(type, number, unit) {
    const { onChange } = this.props;
    const value = { number, unit };
    return (newValue) => {
      value[type] = newValue;
      onChange(value);
    };
  }

  render() {
    const { value, className, attribute } = this.props;
    const { options, defaultOption } = this.getOptionsFromAttribute(attribute);
    const { number, unit } = NumberUnitControl.withDefaults(
      value,
      defaultOption
    );

    return (
      <div className={classnames("number-unit-control", className)}>
        <TextControl
          className="number-unit-control__number"
          type="number"
          value={number}
          onChange={this.getOnChangeHandler("number", number, unit)}
        />
        <SelectControl
          className="number-unit-control__unit"
          options={options}
          value={unit}
          onChange={this.getOnChangeHandler("unit", number, unit)}
        />
      </div>
    );
  }
}
