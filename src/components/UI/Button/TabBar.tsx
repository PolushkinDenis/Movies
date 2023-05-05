import React from "react";
import { Link } from "react-router-dom";
import "./TabBar.scss";

function TabBar({ children, classes, toLink, ...props }: any) {
  return (
    <Link {...props} to={toLink} className={classes}>
      {children}
    </Link>
  );
}

export default TabBar;
