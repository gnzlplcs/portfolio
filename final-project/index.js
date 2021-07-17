const myToken = 'ff0ae246-89ef-493b-ae2a-abf4bc45581f';
const API = `https://dictionaryapi.com/api/v3/references/collegiate/json/`;
const searchBtn = document.getElementById('search-btn');
const wordList = document.getElementById('word');
const wordDetailsContent = document.querySelector('.word-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listener list
searchBtn.addEventListener('click', getWordList);
wordList.addEventListener('click', getWordDefinition);

function getWordList() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
  let url_api = `${API}${searchInputTxt}?key=${myToken}`;
  fetch(url_api)
    .then(res => res.json())
    .then(word => renderWordList(word))
    .catch(error => {
      console.error('Error:', error);
    });
}

function renderWordList(word) {
  if (word[0].meta.id) {
    for (let i = 0; i < word.length; i++) {
      // Creating item
      let wordItem = document.createElement('div');
      let wordName = document.createElement('div');
      let definitionBtn = document.createElement('a');
      wordItem.classList.add('word-item');
      wordName.classList.add('word-name');
      definitionBtn.setAttribute('href', '#');
      definitionBtn.classList.add('definition-btn');
      definitionBtn.innerHTML = 'Get Full Definition';
      wordName.innerHTML = `
        <h3 id="${word[i].meta.uuid}">${word[i].meta.id}</h3>
        <p class="word-fl">${word[i].fl}</p>
      `;
      for (let j = 0; j < word[i].shortdef.length; j++) {
        wordName.innerHTML += `
        <br><p>${word[i].shortdef[j]}</p>
      `;
      }
      wordItem.appendChild(wordName);
      wordItem.appendChild(definitionBtn);
      wordList.appendChild(wordItem)

      // Creating modal
      
    }
  } else if (!word[0].meta.id) {
    wordList.innerHTML = `
      <p>Sorry, we didn\'t find this word</p>
    `;
    wordList.classList.add('notFound');
  }
}

function getWordDefinition(e) {
  e.preventDefault();
  if (e.target.classList.contains('definition-btn')) {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    let url_api = `${API}${searchInputTxt}?key=${myToken}`;
    fetch(url_api)
    .then(response => response.json())
    .then(word => wordFullDetailsModal(word))
    .catch(error => {
      console.error('Error:', error);
    });
  }
}

function wordFullDetailsModal(word) {
  word.forEach(e => console.log(e.meta.uuid))
}