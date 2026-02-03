const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

module.exports = (app) => {

    // CREATE
    router.post("/add", categoryController.create);

    // VIEW
    router.get("/view", categoryController.view);

    // DELETE (soft)
    router.post("/delete/:id", categoryController.delete);

    // UPDATE
    router.post("/update/:id", categoryController.update);

    // MOUNT ROUTER
    app.use("/api/category", router);
};