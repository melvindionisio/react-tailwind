import PropTypes from "prop-types";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="flex items-center justify-between p-6 text-gray-200">
      <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
        {title}
      </h1>
      <Button
        color={showAdd ? "bg-pink-600" : "bg-blue-500"}
        // text={showAdd ? "Close" : "Add"}
        text={showAdd ? <FaTimes /> : <FaPlus />}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Web Pad",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
