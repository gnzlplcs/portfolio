const API = `https://dictionaryapi.com/api/v3/references/collegiate/json/`;
const myToken = 'ff0ae246-89ef-493b-ae2a-abf4bc45581f';

const searchBtn = document.getElementById('search-btn');
const wordList = document.getElementById('word');
const wordDetails = document.getElementById('word-details');
const wordDetailsContent = document.querySelector('.word-details-content');
const definitionCloseBtn = document.getElementById('definition-close-btn');

// event listener list
searchBtn.addEventListener('click', getWordList);
wordList.addEventListener('click', getWordDefinition);
definitionCloseBtn.addEventListener('click', () => {
  wordDetailsContent.parentElement.classList.remove('showDefinition');
})

function getWordList() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
  let url_api = `${API}${searchInputTxt}?key=${myToken}`;
  fetch(url_api)
    .then(res => res.json())
    .then(word => {
      renderWordList(word);
      // renderWordDetails(word);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function renderWordList(word) {
  let html = "";
  if (word !== undefined) {
    word.forEach(w => {
      let shortdefs = "";
      w.shortdef.forEach(sd => {
        shortdefs += `
          <br><p>${sd}</p>
        `;
      });
      html += `
        <div class="word-item">
          <div class="word-name">
            <h3>${w.meta.id}</h3>
            <p class="word-fl">${w.fl}</p>
            ${shortdefs}
            <a href="#" class="definition-btn" id="${w.meta.uuid}">Get Full Definition</a>
          </div>
        </div>
      `;
    });
  } else {
    html = `
      <p>Sorry, we didn\'t find this word</p>
    `;
  }
  wordList.innerHTML = html;
}

function renderWordDetails(word, definitionBtnId) {
  let html = "";
  let stems = "";
  let etymology = "There is no etymology for this word";
  word.filter(w => {
    if (w.meta.uuid == definitionBtnId) {
      if (w.et) {
        etymology = w.et[0][1];
      }
      w.meta.stems.forEach(s => {
        stems += `
            <li>${s}</li>
          `;
      });
      html += `
        <div class="modal" id="${w.meta.uuid}">
        <h2 class="definition-title">${w.meta.id}</h2>
        <p class="definition-category">${w.fl}</p>
        <hr><div><strong>Stems:</strong>
          <ul>
            ${stems}
          </ul>
        </div>
        <p><strong>Etymology:</strong> ${etymology}</p>
        </div>
        `;
    }
  })
  wordDetailsContent.innerHTML = html;
  wordDetailsContent.parentElement.classList.add('showDefinition');
}

function getWordDefinition(e) {
  e.preventDefault();
  if (e.target.classList.contains('definition-btn')) {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    let definitionBtnId = e.target.id;
    let url_api = `${API}${searchInputTxt}?key=${myToken}`;
    fetch(url_api)
      .then(response => response.json())
      .then(word => renderWordDetails(word, definitionBtnId))
      .catch(error => {
        console.error('Error:', error);
      });
  }
}