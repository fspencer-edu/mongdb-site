const Item = require("../models/Items");

const getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch items", error: error.message});
    }
};

const createItem = async (req, res) => {
    try {
        const {name} = req.body;
        if (!name || !name.trim()){
            return res.json.status(400).json({message: "Name is requried"});
        }

        const item = await Item.create({ name: name.trim()});
        res.status(200).json(item);

    } catch (error) {
        res.status(500).json({ message: "Failed to create item", error:error.message});
    }
};

module.exports = {
    getItems,
    createItem
};