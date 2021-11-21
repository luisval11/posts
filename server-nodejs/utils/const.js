const BASE_URL = "https://jsonplaceholder.typicode.com"; 
const BASE_URL_IMAGE = "https://picsum.photos";
const POST = "/posts";
const USER = "/users";
const COMMENT = "/comments";
const ENDPOINT_IMAGE = (id) => { return `/id/${id}/415/300` }; 
const buildUrl = (baseurl, endpoint, params) => {
    const parameters = (Object.keys(params).length > 0) ? concatParams(params) : '';
    return baseurl + endpoint + parameters;
}

const concatParams = (params) => {
    let parameters = '?';
    for (const prop in params) {
        parameters += prop + "=" + params[prop] + '&';
    }
    parameters = parameters.slice(0, -1);
    return parameters;
}

module.exports = {
    BASE_URL: BASE_URL,
    BASE_URL_IMAGE: BASE_URL_IMAGE,
    POST: POST,
    USER: USER,
    COMMENT: COMMENT,
    ENDPOINT_IMAGE: ENDPOINT_IMAGE,
    buildUrl: buildUrl
};