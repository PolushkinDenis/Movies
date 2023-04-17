import React from "react";
import { Link } from "react-router-dom";
import "./TabBar.scss";

function TabBar({ children, classes, toLink }: any) {
  return (
    <Link to={toLink} className={classes}>
      {children}
    </Link>
  );
}

export default TabBar;
