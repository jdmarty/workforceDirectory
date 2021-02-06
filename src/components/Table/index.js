import React, { useEffect } from "react";
import API from "../../util/API";

function Table() {
  useEffect(() => {
    API.getMultipleUsers(10).then((data) => console.log(data));
  }, []);
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/2">Title</th>
          <th className="w-1/4">Author</th>
          <th className="w-1/4">Views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intro to CSS</td>
          <td>Adam</td>
          <td>858</td>
        </tr>
        <tr>
          <td>
            A Long and Winding Tour of the History of UI Frameworks and Tools
            and the Impact on Design
          </td>
          <td>Adam</td>
          <td>112</td>
        </tr>
        <tr>
          <td>Intro to JavaScript</td>
          <td>Chris</td>
          <td>1,280</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
