const CategoryModel = require('../models/Category');

exports.create = async (req, res) => {
    try {
        const data = await CategoryModel.create({
            name: req.body.name
        });

        res.send({
            status: true,
            message: "record created successfully",
            data
        });
    } catch (error) {
        res.send({
            status: false,
            message: "something went wrong",
            error: error.message
        });
    }
};

exports.view = async (req, res) => {
    try {
        const data = await CategoryModel.find({
            deleted_at: null
        });

        res.send({
            status: true,
            message: "record found successfully",
            data
        });
    } catch (error) {
        res.send({
            status: false,
            message: "something went wrong",
            error: error.message
        });
    }
};

exports.update = async (req, res) => {
    try {
        const data = await CategoryModel.updateOne(
            { _id: req.params.id },
            { $set: { name: req.body.name } }
        );

        res.send({
            status: true,
            message: "updated successfully",
            data
        });
    } catch (error) {
        res.send({
            status: false,
            message: "update failed",
            error: error.message
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const data = await CategoryModel.updateOne(
            { _id: req.params.id },
            { $set: { deleted_at: Date.now() } }
        );

        res.send({
            status: true,
            message: "deleted successfully",
            data
        });
    } catch (error) {
        res.send({
            status: false,
            message: "delete failed",
            error: error.message
        });
    }
};