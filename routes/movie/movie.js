const router = require("express").Router();
const addMovie = require("../../views/movie")
const allMovie = require("../../views/movie")

router.get("/list", async (req, res) => {
    try {
        const movies = await allMovie();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/add", async (req, res) => {
    try {
        const body = req.body;
        const movie = await addMovie(body);
        res.status(200).json(movie)
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = router
