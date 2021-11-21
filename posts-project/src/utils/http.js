export const buildUrl = (baseurl, endpoint, params) => {
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