import React, { useEffect, useState } from "react";
import API from "../../util/API";
import TableRow from "../TableRow";
import SortColumn from "../SortColumn"

function Table(props) {
  // Map users into rows
  const renderRows = (users) => {
    return users.map((user, index) => {
      return (
        <TableRow
          thumbnail={user.picture.thumbnail}
          name={user.name}
          username={user.login.username}
          email={user.email}
          phone={user.phone}
          location={user.location}
          age={user.dob.age}
          registered={user.registered.date}
          key={index}
        />
      );
    });
  };

  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Contact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <SortColumn 
                    column="age" 
                    arrow=""
                    onClick={props.onClick}>
                      Age
                    </SortColumn>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <SortColumn 
                    column="reg" 
                    arrow="" 
                    onClick={props.onClick}>
                      Registered
                    </SortColumn>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {renderRows(props.users)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
