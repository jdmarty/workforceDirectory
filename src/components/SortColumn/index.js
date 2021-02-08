import React from "react";

function SortColumn(props) {
  return (
    <div>
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
