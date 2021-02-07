import React from "react";

function Selector(props) {
  return (
    <form className="container">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 py-2 flex">
        <div className="flex justify-center">
          <label className="mx-2" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-black rounded-md"
            type="text"
            placeholder="Name"
            name="name"
            value={props.filter.name}
            onChange={props.onChange}
          ></input>
        </div>
        <div className="flex justify-center">
          <label className="mx-2" htmlFor="username">
            Username
          </label>
          <input
            className="border-2 border-black rounded-md"
            type="text"
            placeholder="Username"
            name="username"
            value={props.filter.username}
            onChange={props.onChange}
          ></input>
        </div>
        <div className="flex justify-center">
          <label className="mx-2" htmlFor="country">
            Country
          </label>
          <select
            className="border-2 border-black rounded-md"
            name="country"
            value={props.filter.country}
            onChange={props.onChange}
          >
            <option value="">All</option>
            {props.countries.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-center">
          <label className="mx-2" htmlFor="country">
            City
          </label>
          <select
            className="border-2 border-black rounded-md"
            name="city"
            value={props.filter.city}
            onChange={props.onChange}
          >
            <option value="">All</option>
            {props.cities.map((city) => {
              return <option value={city}>{city}</option>;
            })}
          </select>
        </div>
      </div>
    </form>
  );
}

export default Selector;
