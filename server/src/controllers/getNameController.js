const axios = require("axios");
const { Driver, Team } = require("../db");

const getDriverDB = async () => {
  const allDriver = await Driver.findAll({
    include: {
      model: Team,
      attributes: ["id", "teams"],
    },
  });
  return allDriver;
};

const getDriverApi = async () => {
  const peticion = (
    await axios(`http://localhost:5000/drivers?limit=15`)
  ).data.slice(0, 15);

  const apiInfoMap = peticion.map((driver) => {
    return {
      id: driver.id,
      forename: driver.name.forename,
      surname: driver.name.surname,
      description: driver.description,
      image: driver.image.url,
      nationality: driver.nationality,
      dob: driver.dob,
      teams: driver.teams,
    };
  });
  return apiInfoMap;
};

const getNameController = async (forename) => {
  const driverDB = await getDriverDB(); //todos los usuarios de la DB
  const driverApi = await getDriverApi(); //todos los usuarios de la API
  const allDrivers = [...driverDB, ...driverApi]; //todos los USUARIOS
  if (forename) {
    let filterDriver = allDrivers.filter((driver) =>
      driver.forename.toLowerCase().includes(forename.toLowerCase())
    );
    if (filterDriver.length) {
      return filterDriver;
    }
  } else {
    return allDrivers;
  }
};

module.exports = { getNameController };
