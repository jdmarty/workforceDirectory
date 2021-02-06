import React, { useEffect, useState } from "react";
import API from "../../util/API";
import TableRow from "../TableRow";

function Table(props) {

  const [users, setUsers] = useState([]);
  const [targetUsers, setTargetUsers] = useState([]);
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    API.getMultipleUsers(10)
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const handleNameChange = e => {
      setNameSearch(e.target.value)
  }

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
                  <input
                    type="text"
                    value={nameSearch}
                    placeholder="Name"
                    onChange={handleNameChange}
                  ></input>
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
                  Age
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Registered
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {renderRows(users)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
