import React from "react";
import LoaderImg from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={LoaderImg} alt="loader" />
        <div className="loader-text capitalize">
          please wait while we prepare the bookVerse for you
        </div>
      </div>
    </div>
  );
};

export default Loader;
