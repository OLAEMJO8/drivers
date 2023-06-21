import React from "react";

function Filtros({ handleSortName, handleSortDob, handleFilter, allDrivers }) {


    
  const uniqueTeams = allDrivers
    .flatMap((driver) => driver.teams.split(",").map((team) => team.trim()))
    .filter((team, index, teams) => teams.indexOf(team) === index);

  return (
    <div>
      <label>
        Order name:
        <select className="select" onChange={handleSortName}>
          <option value="none">None</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </label>
      <label>
        Order nacimiento:
        <select className="select" onChange={handleSortDob}>
          <option value="none">None</option>
          <option value="asc">asc</option>
          <option value="dec">dec</option>
        </select>
      </label>
      <label>
        Filtro team
        <select onChange={handleFilter}>
          <option value="allDrivers">All</option>
          {uniqueTeams.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Filtros;
