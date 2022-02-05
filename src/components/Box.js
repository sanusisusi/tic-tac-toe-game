import React from "react";

function Box({ value, onClick }) {
  const style = {
    height: "80px",
    width: "80px",
    padding: 0,
    margin: "8px",
    borderRadius: "5px",
    backgroundColor:"purple",
    color: "white",
    border: 0,
    cursor: "pointer",
    fontSize: "2rem",
  };

  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Box;
