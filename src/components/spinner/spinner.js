import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import "./spinner.css";

const statusSelector = (state) => state.status;

function Spinner() {
  const status = useAuthStore(statusSelector);

  if (status === "pending") {
    return (
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="dot1" />
          <div className="dot2" />
        </div>
      </div>
    );
  }

  return null;
}

export default Spinner;
