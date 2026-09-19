import { useId } from "react";
import "./Select.css";

/*
  USAGE
  const countries = [
    { value: "pk", label: "Pakistan" },
    { value: "ae", label: "United Arab Emirates" },
  ];

  <Select
    label="Country"
    options={countries}                    // [{ value, label, disabled? }]
    placeholder="Choose a country"         // optional first (unselectable) option
    className={selectStyles.selectOutline} // optional variant, default = "select-default"
    helperText="Used for delivery"
    error="Please choose a country"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
  />
  Any other prop (disabled, required, name, defaultValue...) is passed to <select>.
*/

function Select({
  id,
  label,
  name,
  options = [],
  value,
  onChange,
  placeholder,
  className = "select-default",
  helperText,
  error,
  disabled,
  required,
  ...rest
}) {
  const autoId = useId();
  const selectId = id || autoId;
  const messageId = `${selectId}-message`;
  const message = error || helperText;

  // Uncontrolled + placeholder: start on the placeholder option instead of option 1
  const valueProps =
    value !== undefined
      ? { value }
      : placeholder && rest.defaultValue === undefined
        ? { defaultValue: "" }
        : {};

  return (
    <div className="select-wrapper">
      {label && (
        <label htmlFor={selectId} className="select-label">
          {label}
          {required && (
            <span className="select-required" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
      )}

      <select
        id={selectId}
        name={name}
        onChange={onChange}
        className={`select ${className}`}
        disabled={disabled}
        required={required}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={message ? messageId : undefined}
        {...valueProps}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {message && (
        <p
          id={messageId}
          className={
            error ? "select-message select-message-error" : "select-message"
          }
          role={error ? "alert" : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default Select;
