// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const listOfMovies = {
  account: "Jessy",
  genres: [
    "Thriller",
    "Drama",
    "Anime",
    "Comedy",
    "Romance",
    "Horror",
    "Documentaries"
  ],
  favourites: [
    {
      title: "Little Miss Sunshine",
      genre: "Comedy",
      year: 2006
    },
    {
      title: "Howl's Moving Castle",
      genre: "Japanese animation",
      year: 2004
    },
    {
      title: "Aquaman",
      genre: "Action",
      year: 2019
    },
    {
      title: "The Shape of Water",
      genre: "Drama",
      year: 2017
    },
    {
      title: "Your name",
      genre: "Japanese animation",
      year: 2017
    },
    {
      title: "Inception",
      genre: "Action",
      year: 2010
    }
  ]
};

//Log Jessy's second favorite movie
console.log(listOfMovies["favourites"][1]["title"]);

// Make another object with Daniel’s list of movies and add the Aquaman movie from Jessy’s list to his.

// Created Daniel's list of movies object
const danListOfMovies = {
  account: "Daniel",
  genres: [
    "Thriller",
    "Drama",
    "Anime",
    "Comedy",
    "Romance",
    "Horror",
    "Documentaries"
  ],
  favorites: [
    {
      title: "Hitch",
      genre: "Comedy",
      year: 2005
    },
    {
      title: "Akira",
      genre: "Anime",
      year: 1988
    }
  ]
};

// Created a for loop that iterates through the items in listOfMovies["favourites"] array
for (let i = 0; i < listOfMovies["favourites"].length; i++) {
  // Save current value of iteration into a value
  let objHolder = listOfMovies["favourites"][i];
  // Variable that holds the movie we want to add
  let addThisMovie = listOfMovies["favourites"][2];

  // Conditonal that checks if the movie is in Jessy's object and is equal to the movie wanted, then push that movie to Daniel's object
  if (listOfMovies["favourites"][i] == addThisMovie) {
    danListOfMovies["favorites"].push(objHolder);
  }
}

console.log(danListOfMovies["favorites"]);

// What genres are not in Jessy's favourites?
// Put these in an array and console log this!

console.log(listOfMovies["genres"]);
let unused = ["Thriller", "Romance", "Horror", "Documentaries"];
console.log(unused);
