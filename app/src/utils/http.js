import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8000';

const instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json'
});

/**
 * @param {String} url The url for the api request (without the base)
 * @param {Object} [config]
 * @param {Object} [config.params] An object of queries that will be added to
 * the url
 * @param {Boolean} [config.accessToken] Whether or not to include the
 * access-token header
 * @returns {Observable}
 */

export function get(url, { params = {}, responseType = 'json', headers = {} } = {}) {
  return instance({
    url,
    params,
    headers,
    responseType,
    method: 'get'
  }).then((response) => response.data);
}

export function post(url, data, { params = {}, responseType = 'json', headers = {} } = {}) {
  return instance.post(url, data, { params, headers})
}