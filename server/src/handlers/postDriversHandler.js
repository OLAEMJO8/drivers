const { Driver } = require("../db");
const {
  postDriversController,
} = require("../controllers/postDriversController");

//!4
const postDriversHandler = async (req, res) => {
  try {
    const { id, forename, surname, description, image, nationality, dob, teams } =
      req.body;
    const response = await postDriversController(
      id,
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
      teams
    );

    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postDriversHandler };
