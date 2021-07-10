// Making an useful function to Get data from the APi
export function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        console.log(response.json());
        return response.json();
      }
    })
    .catch(err => console.error('Error: ' + err))
}

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
        ? resolve(JSON.parse(xhttp.responseText))
        : reject(new Error('Error ' + url_api));
      }
    });
    xhttp.send();
  });
}
module.exports = fetchData;