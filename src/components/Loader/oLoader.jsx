import React from "react";
import LoaderImg from "../../images/oloader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={LoaderImg} alt="loader" />
        <div className="loader-text capitalize">placing your order</div>
      </div>
    </div>
  );
};

export default Loader;
