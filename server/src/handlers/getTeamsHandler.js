const { createPostDB, getPostsDB } = require("../controllers/getTeamsController");

const getTeamHandler = async (req, res) => {
  try {
    const response = await getPostsDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postTeamHandler = async (req, res) => {
  const { teams, driverId} = req.body;
  try {
    const response = await createPostDB(teams, driverId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTeamHandler,
  postTeamHandler,
};
