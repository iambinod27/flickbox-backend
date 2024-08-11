const Movie = require("../models/movie");

function addMovie(body) {
    const movie = new Movie(body)
    const addmovie = movie.save();
    return addmovie;
}

function allMovie() {
    const movies = Movie.find();
    return movies;
}

module.exports = addMovie;
module.exports = allMovie;