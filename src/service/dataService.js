import axios from 'axios';

export default {
    getCategories() {
        return axios.get(`http://78.228.62.74:8542/categories`);
    },
}

