import axios from 'axios';

export const axiosGet = (url, successHandler, errorHandler, finallyHandler, params) => axios.get(url, {params})
  .then(function (response) {
    // handle success
    successHandler(response);
  })
  .catch(function (error) {
    // handle error
    errorHandler(error);
  })
  .finally(function () {
    finallyHandler();
  });