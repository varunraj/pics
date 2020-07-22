import axios from 'axios';

// Create a client for axios

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:'Client-ID O6evVgtmCbiymnjl2jFIhyy4uaKLg4xHywq9OFEDBMA'
    }
});