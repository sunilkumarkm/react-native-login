import { api } from './apiService';

export const login = value => {
  return api
    .post('/login', value)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};

