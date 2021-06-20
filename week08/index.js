const API = "https://swapi.dev/api/people/1/";

import { XMLHttpRequest } from 'xmlhttprequest';

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

fetchData(API, function(error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.name, function(error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.birth_year, function(error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.name);
      console.log(data2.birth_year);
      // console.log(data3.dimension);
    })
  })
})

fetchData();