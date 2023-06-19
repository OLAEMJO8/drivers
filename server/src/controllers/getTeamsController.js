const { Team } = require("../db");

const createPostDB = async (teams, DriverId) => {
  const post = await Team.create({ teams });
  await post.setDriver(DriverId);
  return post;
};

const getPostsDB = async () => {
  const posts = await Team.findAll();
  return posts;
};

module.exports = {
  createPostDB,
  getPostsDB,
};
