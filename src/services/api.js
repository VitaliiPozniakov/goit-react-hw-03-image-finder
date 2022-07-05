import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api'

const API_KEY = '28004990-f3c49f187ad64f64267c5955f';


export const  fetchImages = async (query, page = 1) => {

// console.log(page)

    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        page: page,
      });

const response = await axios.get(`/?${searchParams}`);

// console.log(response.data)

return response.data;
}

