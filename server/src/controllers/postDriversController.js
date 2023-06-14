
const { Driver } = require("../db");

const postDriversController = async (
  id,
  forename,
  surname,
  description,
  image,
  nationality,
  dob
) => {
  const createDriver = await Driver.create({
    id,
    forename,
    surname,
    description,
    image,
    nationality,
    dob,
  });
  return createDriver;
};

module.exports = postDriversController;
