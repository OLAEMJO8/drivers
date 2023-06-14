const { Router } = require("express");
const driversRouters = require ("./driversRouters")
const teamsRouters = require ("./teamsRouters")

const router = Router();

routes.use("/drivers", driversRouters);
routes.use("/teams", teamsRouters);

module.exports = router;
