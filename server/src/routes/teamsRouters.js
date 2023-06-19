const { Router } = require("express");
const {getTeamHandler, postTeamHandler} = require("../handlers/getTeamsHandler")

const teamsRouters = Router();

teamsRouters.get("/", getTeamHandler)
teamsRouters.post("/", postTeamHandler)

module.exports = teamsRouters;