const { Router } = require("express");

const adminRouter = Router();

adminRouter.get("/dashboard", (req, res) => {
    res.send("This is the dashboard");
})

module.exports = adminRouter;