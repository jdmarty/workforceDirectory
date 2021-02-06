import { useEffect, useState } from "react";
import API from "./util/API"
import Table from "./components/Table"
import Featured from "./components/Featured"

function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    API.getMultipleUsers(10)
      .then(res => {
        setAllUsers(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
