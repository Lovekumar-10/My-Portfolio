import theme from "../theme";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${theme.buttons.pixel} ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
