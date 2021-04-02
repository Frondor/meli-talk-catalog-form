import { Component } from "react";
import classnames from "classnames";

export default class TextControl extends Component {
  render() {
    const { type = "text", value, onChange, label, className } = this.props;
    return (
      <div className={classnames("text-control", className)}>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
        />
      </div>
    );
  }
}
