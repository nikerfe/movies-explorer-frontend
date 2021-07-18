

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));

export const getMovies = () => {
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then(checkResponse)
};