import axios from 'axios';
const baseDomain = 'https://mymedi.noudeveloper.com'; // Change your api url here

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
