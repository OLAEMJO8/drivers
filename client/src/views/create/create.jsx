import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postDrivers } from "../../redux/action";
import { Link } from "react-router-dom";
import "./create.css";

function Create() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    forename: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: "",
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
      setErrors({
        ...errors,
        forename: input.forename !== "" ? "" : "Nombre requerido",
      });
      
    }
    if (name === "surname") {
      setErrors({
        ...errors,
        surname: input.surname !== "" ? "" : "Apellido requerido",
      });
    }
    if (name === "nationality") {
      setErrors({
        ...errors,
        nationality: input.nationality !== "" ? "" : "Nacionalidad requerida",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDrivers(state));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    validate(
      {
        ...state,
        [name]: value,
      },
      name
    );
  };

  return (
    <div className="body">
      {console.log(state)}
      <form onSubmit={handleSubmit}>
        <div className="home">
          <Link to="/home">Home</Link>
        </div>
        <div>
          <label>Nombre</label>
          <input type="text" name="forename" onChange={handleChange} />
          {errors.forename && <span>{errors.forename}</span>}
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" name="surname" onChange={handleChange} />
          {errors.surname && <span>{errors.surname}</span>}
        </div>
        <div>
          <label>Nacionalidad</label>
          <input type="text" name="nationality" onChange={handleChange} />
          {errors.nationality && <span>{errors.nationality}</span>}
        </div>
        <div>
          <label>Imagen</label>
          <input type="url" name="image" onChange={handleChange} />
          {errors.image && <span>{errors.image}</span>}
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input type="date" name="dob" onChange={handleChange} />
          {errors.dob && <span>{errors.dob}</span>}
        </div>
        <div>
          <label>Descripcion</label>
          <input type="text" name="description" onChange={handleChange} />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <div>
          <label>Equipos</label>
          <input type="text" name="teams" onChange={handleChange} />
          {errors.teams && <span>{errors.teams}</span>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
