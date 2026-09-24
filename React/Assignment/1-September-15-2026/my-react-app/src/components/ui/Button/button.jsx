import "./Button.css";

/*
  USAGE (unchanged calls keep working exactly as before)
  <Button title={"Add"} className={btnStyles.btnFilled} onClick={addTodo} />

  With an icon (e.g. from react-icons), pass a small element as `icon`:
    import { FiTrash2 } from "react-icons/fi";
    <Button
      title="Delete"
      icon={<FiTrash2 />}
      className={btnStyles.btnDanger}
      onClick={handleDelete}
    />
  The icon is decorative (aria-hidden): the visible text already says what
  the button does, so screen readers are not told the icon twice.
*/

function Button({ title, icon, onClick, className, type = "button", ...rest }) {
  return (
    <button type={type} className={className} onClick={onClick} {...rest}>
      {icon && (
        <span className="btn-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {title}
    </button>
  );
}

export default Button;
