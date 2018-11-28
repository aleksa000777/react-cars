import React from "react";
import { history } from "../../utils";

const Failure = () => {
  const goToSearch = () => history.push("/");

  return (
    <div id="failure" className="section">
      <h2 className="header">Oh no!</h2>
      <h3 className="sub-header">Something went wrong! Please try again.</h3>
      <button type="submit" className="button" onClick={goToSearch}>
        Try again
      </button>
    </div>
  );
};

export default Failure;
