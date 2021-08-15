import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {



    return (
        <>
            <SearchForm 
            onShowMovies={props.onShowMovies}
            isMovieSaved={props.isMovieSaved}
            />
            <MoviesCardList 
            movies={props.movies}
            onSavedMovie={props.onSavedMovie}
            />
        </>
    );
}

export default Movies;
