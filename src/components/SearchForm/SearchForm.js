import React from 'react';
import './SearchForm.css';
import { Route } from 'react-router-dom';
import searchIcon from '../../images/search.svg';
function SearchForm(props) {
    
    return (
        
        <section className="search">
            <div className="search__container">
                <form  name={`${props.name}`} action="#" method="POST" className="search__form" noValidate>
               <div className="search_icon"><img src={searchIcon} className="search_icon-image"/></div>
                <input  type="text" className="search__input" name="movies"
                        id="movies-input"  placeholder="Фильм" required />
                    <button type="submit" className="search__submit-button">Найти</button>
                </form>
                <div className="search_short-movies">

                <label className="search_label"><input type="checkbox" className="search__checkbox"/>
                   <span class="search__checkbox-visible"></span>
                   </label>
                   <p className="search__checkbox-title">Короткометражки</p>
                </div>

                   
                  
                 
            
            </div>
        </section>
    )
}

export default SearchForm