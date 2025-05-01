const Input = ({ value, onChange, placeholder, themeStyle, style }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      className="input"
    />
  );
};
export default Input;
