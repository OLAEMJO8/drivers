const axios = require("axios");
const { Driver } = require("../db");

const getUserDB = async () => {
  const allUsers = await Driver.findAll();
  return allUsers;
};

const getUserApi = async () => {
  const peticion = (await axios("http://localhost:5000/drivers")).data;
  const apiInfoMap = peticion.map((user) => {
    return {
      id: user.id,
      forename: user.name.forename,
      surname: user.name.surname,
      description: user.description,
      image: user.image.url,
      nationality: user.nationality,
      dob: user.dob,
    };
  });
  return apiInfoMap;
};

const getNameController = async (forename) => {
  const usersDB = await getUserDB(); //todos los usuarios de la DB
  const usersApi = await getUserApi(); //todos los usuarios de la API
  const allUsers = [...usersDB, ...usersApi]; //todos los USUARIOS
  if (forename) {
    let filterUsers = allUsers.filter((user) =>
      user.forename.toLowerCase().includes(forename.toLowerCase())
    );
    if (filterUsers.length) {
      return filterUsers;
    }
  } else {
    return allUsers;
  }
};

module.exports= {getNameController};