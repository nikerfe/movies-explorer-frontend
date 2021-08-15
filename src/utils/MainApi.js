const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

class MainApi {


    constructor({ baseUrl, token }) {
        this._baseUrl = baseUrl;
        this._token = token;
    }

    register(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(checkResponse)
    }

    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(checkResponse)
    };


    getToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(checkResponse)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
            }
        })
            .then(checkResponse)
    }

    editUserProfile(data) {

        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(checkResponse)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        })
            .then(checkResponse)
    }
    addNewCard(data) {

        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(checkResponse)
    }


    deleteCard(cardId) {

        return fetch(`${this._baseUrl}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        })
            .then(checkResponse)
    }
    savedMovie(movie) {

        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: movie.image,
                trailer: movie.trailer,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: movie.thumbnail,
                movieId: movie.movieId,
            })
        })
            .then(checkResponse)
    }
    deleteSavedMovie(movieId) {

        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(checkResponse)
    }

    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }
        })
        .then(checkResponse)
      };
};

const api = new MainApi({
    baseUrl: 'http://api.theworldofcinema.nomoredomains.monster',
    token: `Bearer ${localStorage.getItem('jwt')}`
});

export default api;

