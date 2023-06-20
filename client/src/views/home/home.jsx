import { getDrivers } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Cardlist from "../../componentes/cardlist/cardlist";
import Navbar from "../../componentes/navbar/navbar";
import { useEffect } from "react";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    if (!allDrivers.length) {
      dispatch(getDrivers());
    }
  }, [dispatch, allDrivers]);

  return (
    <div className="body">
      <div>
        <Navbar className="navbar"/>
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
