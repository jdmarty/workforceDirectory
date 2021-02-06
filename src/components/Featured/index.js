import React from "react";

function Featured(props) {
  return (
    <div className="flex flex-row container mx-auto border-2 border-blue-700">
      <img src={props.image} alt={props.name}></img>
      <p>Hello!</p>
    </div>
  );
}

export default Featured;
