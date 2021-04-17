import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block p-2 text-gray-200 transition rounded-full  focus:outline-none ${color} transform active:scale-110 shadow-md text-xl`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
