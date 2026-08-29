const BASE_URL = 'https://server.leafline.me';

export const ENDPOINTS = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
  },
  MAP: {
    GET_LOCATION: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
  },
};

export default ENDPOINTS;
