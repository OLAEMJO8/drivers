import React from "react";

function Filtros({ handleSortName, handleSortDob }) {
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
    </div>
  );
}

export default Filtros;
