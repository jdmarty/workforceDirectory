import { useEffect, useState } from "react";
import API from "./util/API"
import Table from "./components/Table"
import Selector from "./components/Selector"

function App() {
  const [users, setUsers] = useState([]);
  const [targetUsers, setTargetUsers] = useState([]);
  const [filter, setFilter] = useState({
    name: "",
    username: "",
    country: "",
    city: ""
  });
  const [sort, setSort] = useState({
    age: "",
    reg: ""
  });
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // Hook to get the initial list of users
  useEffect(() => {
    API.getMultipleUsers(10)
      .then((res) => {
        // set users and target users
        setUsers(res.data.results);
        setTargetUsers(res.data.results);
        // get a list of countries and cities
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
    setFilter(newFilter);
    
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
    
    //set targets
    setTargetUsers(targets);
  }

  // Handle Sort Click
  const handleSortClick = e => {
    // set a new sort object
    let newSort = {...sort}
    if ((newSort[e.target.dataset.column] === "asc")) {
      newSort[e.target.dataset.column] = "desc";
    } else if (newSort[e.target.dataset.column] === "desc") {
      newSort[e.target.dataset.column] = "";
    } else {
      newSort[e.target.dataset.column] = "asc";
    }
    setSort(newSort)

    let targets = [...targetUsers]

    // sort by age
    if (sort.age && e.target.dataset.column === "age") {
      if (sort.age === "asc") {
        targets.sort((a,b) => a.dob.age - b.dob.age)
      } else if (sort.age === "desc") {
        targets.sort((a, b) => b.dob.age - a.dob.age);
      }
    }

    // sort by registered date
    if (sort.reg && e.target.dataset.column === "reg") {
      if (sort.reg === "asc") {
        targets.sort((a, b) => a.registered.age - b.registered.age);
      } else if (sort.reg === "desc") {
        targets.sort((a, b) => b.registered.age - a.registered.age);
      }
    }

    setTargetUsers(targets)
  }

  return (
    <div className="App">
      <Selector 
        onChange={handleFilterChange} 
        filter={filter} 
        countries={countries}
        cities={cities}/>
      <Table 
        users={targetUsers} 
        sort={sort}
        onClick={handleSortClick}/>
    </div>
  );
}

export default App;
