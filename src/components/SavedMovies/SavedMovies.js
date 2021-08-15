import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
    return (
        <>
            <SearchForm 
            onShowMovies={props.onShowMovies}
            isMovieSaved={props.isMovieSaved}
            onMovieSave={props.onMovieSave}
            />
            <MoviesCardList 
            movies={props.movies}
            isSaved={props.isSaved}
            onDeleteMovie={props.onDeleteMovie}
            />
        </>
    );
}

export default SavedMovies;
