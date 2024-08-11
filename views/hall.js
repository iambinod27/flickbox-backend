const Hall = require("../models/hall");

function addHall(body) {
    const hall = new Hall(body)
    const addHall = hall.save();
    return addHall;
}

module.exports = addHall;