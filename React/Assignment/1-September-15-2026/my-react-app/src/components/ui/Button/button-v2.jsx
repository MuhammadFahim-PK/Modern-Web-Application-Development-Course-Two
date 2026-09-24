import "./Button.css";

function Button({ title, onClick, className, ...rest }) {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {title}
    </button>
  );
}

export default Button;
