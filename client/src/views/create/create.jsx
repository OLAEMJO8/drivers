import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getTeams, postDrivers } from "../../redux/action";
import { Link } from "react-router-dom";
import "./create.css";

function Create() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  const teamsTraer = useSelector((state) => state.teams);

  const [state, setState] = useState({
    forename: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: [],
  });
  const [errors, setErrors] = useState({
    forename: "Nombre requerido",
    surname: "Apellido requerido",
    nationality: "Nacionalidad requerida",
    image: "Imagen requerida",
    dob: "Fecha requerida (formato aaaa/mm/dd)",
    description: "Descripcion",
    teams: "Equipos",
  });

  const validate = (input, name) => {
    if (name === "forename") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        forename: input.forename !== "" ? "" : "Nombre requerido",
      }));
    }
    if (name === "surname") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        surname: input.surname !== "" ? "" : "Apellido requerido",
      }));
    }
    if (name === "nationality") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nationality: input.nationality !== "" ? "" : "Nacionalidad requerida",
      }));
    }
    if (name === "image") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: input.image !== "" ? "" : "Imagen requerida",
      }));
    }
    if (name === "dob") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: input.dob !== "" ? "" : "Fecha requerida (formato aaaa/mm/dd)",
      }));
    }
    if (name === "description") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: input.description !== "" ? "" : "Descripcion requerida",
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value !== "" ? "" : `${name[0].toUpperCase() + name.slice(1)} requerido`,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDrivers(state));
    setState({
      forename: "",
      surname: "",
      nationality: "",
      image: "",
      dob: "",
      description: "",
      teams: "",
    });
  };

  const handleSelect = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) => Number(option.value));
    const selectedNames = selectedOptions.map((option) => option.title);
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: selectedValues,
      teamsName: selectedNames.join(", "),
    }));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      teams: selectedValues.length > 0 ? "" : "Equipos requeridos",
    }));
  
    return selectedValues;
  };
  

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <div className="home">
          <Link to="/home">Home</Link>
        </div>
        <div>
          <label>Nombre</label>
          <input type="text" name="forename" value={state.forename} onChange={handleChange} />
          {errors.forename && <span>{errors.forename}</span>}
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" name="surname" value={state.surname} onChange={handleChange} />
          {errors.surname && <span>{errors.surname}</span>}
        </div>
        <div>
          <label>Nacionalidad</label>
          <input type="text" name="nationality" value={state.nationality} onChange={handleChange} />
          {errors.nationality && <span>{errors.nationality}</span>}
        </div>
        <div>
          <label>Imagen</label>
          <input type="url" name="image" value={state.image} onChange={handleChange} />
          {errors.image && <span>{errors.image}</span>}
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input type="date" name="dob" value={state.dob} onChange={handleChange} />
          {errors.dob && <span>{errors.dob}</span>}
        </div>
        <div>
          <label>Descripcion</label>
          <input type="text" name="description" value={state.description} onChange={handleChange} />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <label>Equipos:</label>
        <select name="teams" value={state.teams} onChange={handleSelect} multiple>
          {teamsTraer?.map((t) => (
            <option title={t.teams} value={t.id} key={t.id}>
              {t.teams}
            </option>
          ))}
        </select>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
