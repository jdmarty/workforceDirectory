import React from "react";

function SortColumn(props) {
  return (
    <div 
      data-column={props.column}
      onClick={props.onClick}>
        {props.children}
      <span className="mx-2">{props.arrow}</span>
    </div>
  );
}

export default SortColumn;
