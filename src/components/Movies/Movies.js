import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {



    return (
        <>
            <SearchForm 
            onShowMovies={props.onShowMovies}
            isMovieSaved={props.isMovieSaved}
            isShortMovies={props.isShortMovies}
            handleShortMovies={props.handleShortMovies}
            />
            <MoviesCardList 
            movies={props.movies}
            savedMovies={props.savedMovies}
            onSavedMovie={props.onSavedMovie}
            onDeleteMovie={props.onDeleteMovie}
            onAddMovies={props.onAddMovies}
            error={props.error}
            notFound={props.notFound}
            isLoading={props.isLoading}
            />
        </>
    );
}

export default Movies;
