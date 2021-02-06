import React from "react";

function TableRow(props) {
  const registerDate = new Date(props.registered).toDateString()
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={props.thumbnail}
              alt={props.name.first + " " + props.name.last}
            ></img>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {props.name.first + " " + props.name.last}
            </div>
            <div className="text-sm text-gray-500">{props.username}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {props.location.street.number + " " + props.location.street.name}
        </div>
        <div className="text-sm text-gray-500">
          {props.location.state + ", " + props.location.country}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{props.email}</div>
        <div className="text-sm text-gray-500">{props.phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="text-sm text-gray-500">{props.age}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <div className="text-sm text-gray-500">{registerDate}</div>
      </td>
    </tr>
  );
}

export default TableRow;
