const Tool = require("../models/tool");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const tool = await new Tool(req.body).save();
        res.status(201).send(tool);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const tools = await Tool.find();
        res.status(200).send(tools);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const tool = await Tool.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true } // Returns the updated document
        );
        res.send(tool);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const tool = await Tool.findByIdAndDelete(req.params.id);
        res.send(tool);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
