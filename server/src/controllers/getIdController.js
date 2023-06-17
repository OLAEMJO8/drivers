const axios = require("axios");
const { Driver } = require("../db");

const getIdController = async (id) => {
  if (isNaN(id)) {
    const user = await Driver.findByPk(id);
    return user;
  }
  const user = (await axios.get(`http://localhost:5000/drivers/${id}`)).data;
  return user;
};

module.exports = {getIdController};
