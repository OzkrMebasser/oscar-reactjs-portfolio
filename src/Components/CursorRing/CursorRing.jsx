import React, { useContext } from "react";
import "./CursorRing.css";
import useMousePosition from "../../context/hook/useMousePosition";
import { MouseContext } from "../../context/MouseContextProvider";

const CursorRing = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const { x, y } = useMousePosition();
  
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default CursorRing;
