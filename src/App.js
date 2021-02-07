import { useEffect, useState } from "react";
import API from "./util/API"
import Table from "./components/Table"
import Selector from "./components/Selector"

function App() {
  const [users, setUsers] = useState([]);
  const [targetUsers, setTargetUsers] = useState([]);
  const [filter, setFilter] = useState({});
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // Hook to get the initial list of users
  useEffect(() => {
    API.getMultipleUsers(10)
      .then((res) => {
        setUsers(res.data.results);
        setTargetUsers(res.data.results);
        const countries = res.data.results.map(user => {
          return user.location.country
        });
        const cities = res.data.results.map((user) => {
          return user.location.city;
        });
        setCountries(countries)
        setCities(cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle Input change
  const handleFilterChange = e => {
    // set values on new filter
    const newFilter = filter;
    newFilter[e.target.name] = e.target.value
    let targets = users;

    // filter by name
    if (filter.name) {
      targets = targets.filter((user) => {
        return (
          user.name.first.match(new RegExp(filter.name, "gi")) ||
          user.name.last.match(new RegExp(filter.name, "gi"))
        );
      });
    }
    // filter by username
    if (filter.username) {
      targets = targets.filter((user) => {
        return user.login.username.match(new RegExp(filter.username, "gi"));
      });
    }

    // filter by country
    if (filter.country) {
      targets = targets.filter((user) => {
        return user.location.country.match(
          new RegExp(filter.country, "gi")
        );
      });
    }

    // filter by city
    if (filter.city) {
      targets = targets.filter((user) => {
        return user.location.city.match(new RegExp(filter.city, "gi"));
      });
    }
    setTargetUsers(targets);
    return setFilter(filter)
  }

  return (
    <div className="App">
      <Selector 
        onChange={handleFilterChange} 
        filter={filter} 
        countries={countries}
        cities={cities}/>
      <Table users={targetUsers} />
    </div>
  );
}

export default App;
