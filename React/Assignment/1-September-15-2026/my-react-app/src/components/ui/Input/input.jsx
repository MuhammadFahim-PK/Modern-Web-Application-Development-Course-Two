import { useId } from "react";
import "./Input.css";

/*
  USAGE
  <Input
    label="Email"                          // visible label (required for accessibility)
    type="email"
    placeholder="name@example.com"
    className={inputStyles.inputOutline}   // optional variant, default = "input-default"
    helperText="We never share your email"
    error="Enter a valid email address"    // shows the error message and red border
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  Any other prop (disabled, required, maxLength, autoComplete...) is passed to <input>.
*/

function Input({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "input-default",
  helperText,
  error,
  disabled,
  required,
  ...rest
}) {
  const autoId = useId();
  const inputId = id || autoId;
  const messageId = `${inputId}-message`;
  const message = error || helperText;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && (
            <span className="input-required" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${className}`}
        disabled={disabled}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={message ? messageId : undefined}
        {...rest}
      />

      {message && (
        <p
          id={messageId}
          className={
            error ? "input-message input-message-error" : "input-message"
          }
          role={error ? "alert" : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Input;
