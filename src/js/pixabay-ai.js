export const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "43079941-e5e991934da9723ea56a17ec5";

export const options = {
    params: {
        key: API_KEY,
        q: "",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: 1,
        per_page: 40,
    },
};