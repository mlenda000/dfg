const Button = ({ children, style, display, onClick, onSubmit }) => {
  return (
    <button
      type={onSubmit ? "submit" : "button"}
      style={style}
      className={`button-${display}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
