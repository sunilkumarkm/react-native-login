import { create } from 'apisauce';

// define the api
export const api = create({
  baseURL: 'http://heccomplaint.ddns.net/nbl/public/api/auth',
  headers: {
    Accept: 'application/json'
  },
  timeout: 20000
});
