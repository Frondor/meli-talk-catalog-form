import { Component } from "react";
import classnames from "classnames";

export default class SelectControl extends Component {
  render() {
    const { options, value, onChange, className } = this.props;
    return (
      <div className={classnames("select-control", className)}>
        <select
          className="select-control__input"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        >
          {options.map(({ name, value }) => (
            <option value={value || name} key={name || value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
