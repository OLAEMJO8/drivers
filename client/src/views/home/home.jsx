import { getDrivers, getDriversByName } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Cardlist from "../../componentes/cardlist/cardlist";
import Navbar from "../../componentes/navbar/navbar";
import { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const [search, setSearch]= useState("")

  useEffect(() => {
    if (!allDrivers.length) {
      dispatch(getDrivers());
    }
  }, [dispatch, allDrivers]);

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDriversByName(search));
  };

  return (
    <div className="body">
      <div className="navbar">
        <Navbar  handleSubmit={handleSubmit} handleChange={handleChange}/>
      </div>
      <div>
        <section className="container">
          <Cardlist allDrivers={allDrivers} />
        </section>
      </div>
    </div>
  );
}

export default Home;
