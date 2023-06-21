const { Team } = require("../db");

const createPostDB = async (teams, driverId) => {
  const post = await Team.create({ teams });
  await post.setDriver(driverId);
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
