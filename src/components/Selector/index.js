import React from "react";

function Selector(props) {
  return (
    <form className="bg-gray-300 py-2">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 py-2 flex">
        <h1 className="lg:col-span-4 col-span-2 text-center text-xl underline">
          SEARCH OPTIONS
        </h1>
        <div className="flex justify-center">
          <label className="px-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-black rounded-md shadow-xl"
            type="text"
            placeholder="Name"
            name="name"
            value={props.filter.name}
            onChange={props.onFilter}
          ></input>
        </div>
        <div className="flex justify-center">
          <label className="px-2" htmlFor="username">
            Username
          </label>
          <input
            className="border-2 border-black rounded-md shadow-xl"
            type="text"
            placeholder="Username"
            name="username"
            value={props.filter.username}
            onChange={props.onFilter}
          ></input>
        </div>
        <div className="flex justify-center">
          <label className="px-2" htmlFor="country">
            Country
          </label>
          <select
            className="border-2 border-black rounded-md shadow-xl"
            name="country"
            value={props.filter.country}
            onChange={props.onFilter}
          >
            <option value="">All</option>
            {props.countries.map((country, index) => {
              return (
                <option value={country} key={country + index}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-center">
          <label className="px-2" htmlFor="country">
            City
          </label>
          <select
            className="border-2 border-black rounded-md shadow-xl"
            name="city"
            value={props.filter.city}
            onChange={props.onFilter}
          >
            <option value="">All</option>
            {props.cities.map((city, index) => {
              return (
                <option value={city} key={city + index}>
                  {city}
                </option>
              );
            })}
          </select>
        </div>
        <div className="lg:col-span-4 col-span-2 flex justify-center">
          <button
            className="border-2 border-black rounded-md p-1 bg-pink-300 shadow-xl mx-2"
            onClick={props.onReset}
          >
            Reset Search
          </button>
          <div className="border-2 border-black rounded-md p-1 bg-blue-300 shadow-xl">
            <button onClick={props.onGenerate}>Generate Users</button>
            <input
              className="w-16 mx-2"
              type="number"
              max="1000"
              onChange={props.onCountChange}
              value={props.userCount}
            ></input>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Selector;
