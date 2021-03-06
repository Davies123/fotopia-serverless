import { API } from 'aws-amplify';

const endpointName = 'fotos';
export const post = (hostname, route, params) => API.post(endpointName, route, params);
export const get = (hostname, route) => API.get(endpointName, route);
export const del = (hostname, route) => API.del(endpointName, route);
export const put = (hostname, route, params) => API.put(endpointName, route, params);
