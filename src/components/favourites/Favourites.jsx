import React, { useState, useEffect } from 'react';
import { Button } from './Favourites.styles';



export default function Favourites({ children, ...restProps }) {
  const [favourites, setFavourites] = useState([]);
 


// useEffect(() => {
//   const moviefav = JSON.parse(
//     localStorage.getItem("movie-favourites")
//   );
  
//   if (Array.isArray(moviefav)) {
//     setFavourites(moviefav);
//   }
// }, []);



// const addFavouriteMovie = (movieObj) => {
//    const isAlreadyFavourite = favourites.filter(
//     (eachMovieObj) => eachMovieObj.imdbID === movieObj.imdbID
//   );
//   if (isAlreadyFavourite.length > 0) {
//     return;
//   }
//   const newlikedmovies = [...favourites, movieObj];

//   setFavourites(newlikedmovies);
//   saveToLocalStorage(newlikedmovies);
// };

// const RemoveFavouriteMovie = (movie) => {
//   const removeList = favourites.filter(
//     (favourites) => favourites.imdbID !== movie.imdbID
//   );

//   setFavourites(removeList);
  
//   saveToLocalStorage(removeList);
// };

// const saveToLocalStorage = (items) => {
//   localStorage.setItem("movie-favourites", JSON.stringify(items));
// };
// <Card.Item key={item.docId} item={item}>


return (
  <Button onClick={() => setFavourites (favourites + 1)}>
   My Favourite movies {favourites} &#10084;
 </Button>
);
};

