import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <div style={{ marginTop: "60px" }}>
        The page you are looking for is not Found
      </div>
      <NavLink to="/">Click here</NavLink> to go back to the home page
    </Fragment>
  );
};

export default NotFound;
