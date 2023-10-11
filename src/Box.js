import React, { useState } from "react";

const Box = ({ id, color, width, height, deleteBox }) => {
  const removeBox = () => deleteBox(id);

  return (
    <>
      <div
        style={{ backgroundColor: color, width: width, height: height }}
      ></div>
      <button onClick={removeBox}>X</button>
    </>
  );
};

export default Box;
