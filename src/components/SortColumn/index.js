import React from "react";

function SortColumn(props) {
  return (
    <div
      // data-direction={props.direction}
      // data-column={props.column}
      // onClick={props.onClick}
    >
      {props.children}
      <span
        className="mx-2 cursor-pointer"
        onClick={props.onClick}
        data-direction={props.direction}
        data-column={props.column}
      >
        {props.arrow}
      </span>
    </div>
  );
}

export default SortColumn;
