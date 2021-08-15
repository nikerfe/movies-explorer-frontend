

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

/*{"id":1,
"name":"stones-in-exile",
"alternativeText":"",
"caption":"",
"width":512,
"height":279,
"formats":{"thumbnail":{"hash":"thumbnail_stones_in_exile_b2f1b8f4b7","ext":".jpeg","mime":"image/jpeg","width":245,"height":134,"size":8.79,"path":null,"url":"/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"},
"small":{"hash":"small_stones_in_exile_b2f1b8f4b7","ext":".jpeg","mime":"image/jpeg","width":500,"height":272,"size":25.68,"path":null,"url":"/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg"}},"hash":"stones_in_exile_b2f1b8f4b7","ext":".jpeg","mime":"image/jpeg","size":25.53,"url":"/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
"previewUrl":null,"provider":"local","provider_metadata":null,"created_at":"2020-11-23T14:11:57.313Z","updated_at":"2020-11-23T14:11:57.313Z"}}*/