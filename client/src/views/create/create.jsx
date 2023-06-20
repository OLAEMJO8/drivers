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
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    validate(
      {
        ...state,
        [event.target.name]: event.target.value,
      },
      event.target.name
    );
  };

  return (
    <div className="body">
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
        </div>
        <div>
          <label>Fecha de Nacimiento</label>
          <input type="text" name="dob" onChange={handleChange} />
        </div>
        <div>
          <label>Descripcion</label>
          <input type="text" name="description" onChange={handleChange} />
        </div>
        <div>
          <label>Equipos</label>
          <input type="text" name="teams" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
