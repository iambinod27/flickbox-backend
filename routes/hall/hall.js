const router = require("express").Router();
const addHall = require("../../views/hall")

router.post("/add", async (req, res) => {
    try {
        const body = req.body;
        const hall = await addHall(body);
        res.status(200).json(hall)
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = router