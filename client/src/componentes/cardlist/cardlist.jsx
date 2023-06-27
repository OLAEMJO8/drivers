// import "./cardlist.css"

// import Cards from "../card/card";

// function Cardlist({allDrivers }) {
 
//   const driversList = Object.values(allDrivers);
//   return (
//     <div className="card-list">
//       {driversList.map((driver, index) => (
//         <Cards key={index} driver={driver} />
//       ))}
//     </div>
//   );
// }

// export default Cardlist;
import "./cardlist.css"

import Cards from "../card/card";

function Cardlist({allDrivers }) {
 

  return (
    <div className="card-list">
      {allDrivers.map(driver => (
        <Cards key={driver.id} driver={driver} />
      ))}
    </div>
  );
}

export default Cardlist;