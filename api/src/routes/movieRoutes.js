const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const multer = require('multer')
const uploads = multer({ dest: 'uploads/movie' })
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/movie')
    },
    filename: function (req, file, cb) {
        console.log(path.extname(file.originalname));
        cb(null, 'movie-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage }).single('poster');

module.exports = (app) => {

    // CREATE
    router.post("/add", upload, movieController.create);

    // VIEW
    router.get("/view", uploads.none(), movieController.view);

    // DELETE (soft)
    router.post("/delete/:id", uploads.none(), movieController.delete);

    // UPDATE
    router.post("/update/:id", upload, movieController.update);

    // MOUNT ROUTER
    app.use("/api/movie", router);
};