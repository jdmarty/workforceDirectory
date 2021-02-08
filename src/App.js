import { useEffect, useState } from "react";
import API from "./util/API"
import Table from "./components/Table"
import Selector from "./components/Selector"

function App() {
  const [userCount, setUserCount] = useState(100)
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
    API.getMultipleUsers(100)
      .then((res) => {
        // set users and target users
        setUsers(res.data.results);
        setTargetUsers(res.data.results);
        // get a list of countries and cities
        mapCountries(res.data.results);
        mapCities(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function to create countries map
  const mapCountries = users => {
    const countries =  users.map((user) => {
      return user.location.country;
    });
    const uniqueCountries = [...new Set(countries)]
    setCountries(uniqueCountries)
  }

  // function to create cities map
  const mapCities = (users) => {
    const cities = users.map((user) => {
      return user.location.city;
    });
    const uniqueCities = [...new Set(cities)];
    setCities(uniqueCities);
  };

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

  // Handle Reset Click
  const handleResetClick = e => {
    e.preventDefault();
    // set sort, filter, and target users back to defaults
    setSort({
      age: "",
      reg: ""
    })
    setFilter({
      name: "",
      username: "",
      country: "",
      city: "",
    });
    setTargetUsers(users)
  }

  // Handle User Count Change
  const handleUserCountChange = e => {
    const newCount = e.target.value
    setUserCount(newCount)
  }

  // Handle User Generate Click
  const handleGenerateClick = e => {
    e.stopPropagation()
    API.getMultipleUsers(userCount)
      .then((res) => {
        // set users and target users
        setUsers(res.data.results);
        setTargetUsers(res.data.results);
        // get a list of countries and cities
        mapCountries(res.data.results);
        mapCities(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
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

    let targets = [...targetUsers]

    // sort by age
    if (newSort.age && e.target.dataset.column === "age") {
      if (newSort.age === "asc") {
        targets.sort((a,b) => a.dob.age - b.dob.age)
      } else if (newSort.age === "desc") {
        targets.sort((a, b) => b.dob.age - a.dob.age);
      }
    }

    // sort by registered date
    if (newSort.reg && e.target.dataset.column === "reg") {
      if (newSort.reg === "asc") {
        targets.sort((a, b) => b.registered.age - a.registered.age);
      } else if (newSort.reg === "desc") {
        targets.sort((a, b) => a.registered.age - b.registered.age);
      }
    }

    setSort(newSort);
    setTargetUsers(targets)
  }

  return (
    <div className="App">
      <Selector 
        onFilter={handleFilterChange}
        onReset={handleResetClick}
        onCountChange={handleUserCountChange}
        onGenerate={handleGenerateClick}
        filter={filter} 
        countries={countries}
        cities={cities}
        userCount={userCount}/>
      <Table 
        users={targetUsers} 
        sort={sort}
        onClick={handleSortClick}/>
    </div>
  );
}

export default App;
