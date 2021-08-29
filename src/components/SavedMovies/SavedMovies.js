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
            isShortMovies={props.isShortMovies}
            handleShortMovies={props.handleShortMovies}
            isLoading={props.isLoading}
            />
            <MoviesCardList 
            movies={props.movies}
            isSaved={props.isSaved}
            onDeleteMovie={props.onDeleteMovie}
            error={props.error}
            notFound={props.notFound}
            isLoading={props.isLoading}
            />
        </>
    );
}

export default SavedMovies;
