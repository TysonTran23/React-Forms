import React, { useState } from "react";

import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), color: "red", width: "100px", height: "100px" },
  ];

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const deleteBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <h1>Boxes</h1>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, color, width, height }) => (
          <Box
            key={id}
            id={id}
            color={color}
            width={width}
            height={height}
            deleteBox={deleteBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
