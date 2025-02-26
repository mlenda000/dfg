const Input = ({ input, onChange, placeholder, themeStyle, style }) => {
  return (
    <input
      value={input}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      className="input"
    />
  );
};
export default Input;
