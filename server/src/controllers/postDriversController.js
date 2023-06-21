const { Driver } = require("../db");

const postDriversController = async (
  id,
  forename,
  surname,
  description,
  image,
  nationality,
  dob,
  teams
) => {
  const createDriver = await Driver.create({
    id,
    forename,
    surname,
    description,
    image,
    nationality,
    dob,
    teams,
  });
  return createDriver;
};

module.exports = { postDriversController };
