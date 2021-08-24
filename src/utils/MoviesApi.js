

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));
export const moviesUrl = 'https://api.nomoreparties.co/beatfilm-movies'

export const getMovies = () => {
    return fetch(moviesUrl, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then(checkResponse)
};
