export default function FormField(props) {
  const { attribute, children, message } = props;
  return (
    <div className="form-field">
      <label>{attribute.name}:</label>
      <div className="form-field__control">{children}</div>
      <div className="form-field__message">{message}</div>
    </div>
  );
}
