import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-4 py-2 text-gray-200 transition rounded  focus:outline-none ${color} active:bg-gray-500 transform active:scale-105 shadow-md `}
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
