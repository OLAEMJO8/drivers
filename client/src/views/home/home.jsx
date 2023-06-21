import {
  getDrivers,
  getDriversByName,
  cleanDetail,
  ordenarPorName,
  ordenarDob,
  filtradoPorDriver,
} from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Cardlist from "../../componentes/cardlist/cardlist";
import Navbar from "../../componentes/navbar/navbar";
import { useEffect, useState } from "react";
import "./home.css";
import Paginado from "../../componentes/paginado/Paginado";
import Filtros from "../../componentes/filtros/filtros";

function Home() {
  const dispatch = useDispatch();
  const backUp = useSelector((state) => state.backUp);
  const allDrivers = useSelector((state) => state.allDrivers);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(9);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = allDrivers.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    if (!allDrivers.length) {
      dispatch(getDrivers());
    }
  }, [dispatch, allDrivers]);
  useEffect(() => {
    return () => dispatch(cleanDetail());
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDriversByName(search));
  };

  const handleSortName = (e) => {
    e.preventDefault();
    dispatch(ordenarPorName(e.target.value));
  };
  const handleSortDob = (e) => {
    e.preventDefault();
    dispatch(ordenarDob(e.target.value));
  };
  const handleFilter = (e) => {
    e.preventDefault(),
    dispatch(filtradoPorDriver(e.target.value));
  };

  return (
    <div className="body">
      <div>
        <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <div>
        <Filtros
          allDrivers={backUp}
          handleFilter={handleFilter}
          handleSortName={handleSortName}
          handleSortDob={handleSortDob}

        />
      </div>
      <div>
        <Paginado
          totalPosts={allDrivers.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
      <div>
        <section>
          <Cardlist allDrivers={currentPosts} />
        </section>
      </div>
    </div>
  );
}

export default Home;
