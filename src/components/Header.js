import Button from "./Button";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" ? (
        <Button
          color={showAdd ? "red" : "green"}
          label={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      ) : null}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
