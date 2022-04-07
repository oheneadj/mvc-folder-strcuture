const { Router } = require("express");
const { welcome, greet, hello } = require("../controllers/index.controller")

const indexRouter = Router();

indexRouter.get("/", welcome)

indexRouter.get("/greet", greet )

indexRouter.get("/hello", hello)



module.exports = indexRouter;