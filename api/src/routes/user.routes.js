const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

module.exports = (app) => {

    router.post("/login", userController.login);
    router.post("/register", userController.register);
    router.get("/profile", userController.profile);

    // MOUNT ROUTER
    app.use("/api/user", router);
};


