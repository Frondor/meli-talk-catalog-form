import classnames from "classnames";

export default function Button({
  className,
  disabled,
  children,
  onClick = null,
  type = "button"
}) {
  const btnClassNames = classnames("btn", className, {
    "btn--disabled": disabled
  });
  return (
    <button type={type} className={btnClassNames} onClick={onClick}>
      {children}
    </button>
  );
}
