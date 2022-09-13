"use strict";

const numberOfFilms = prompt('how many films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [ ],
    privat: false
};

const a = prompt('last movie you watched?', ''),
      b = prompt('and what do you think?', ''),
      c = prompt('last movie you watched?', ''),
      d = prompt('and what do you think?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);