import WordView from "./wordView.js";
import WordModel from "./wordModel.js";

const searchBtn = document.getElementById('search-btn');
const wordList = document.getElementById('word');
const definitionCloseBtn = document.getElementById('definition-close-btn');
const wordDetailsContent = document.querySelector('.word-details-content');

// event listener list
searchBtn.addEventListener('click', getWordList);
wordList.addEventListener('click', getWordDefinition);
definitionCloseBtn.addEventListener('click', () => {
  wordDetailsContent.parentElement.classList.remove('showDefinition');
});

function getWordList() {
  let wordModel = new WordModel();
  fetch(wordModel.getAPI())
    .then(res => res.json())
    .then(word => {
      let wordView = new WordView();
      wordView.renderWordList(word);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function getWordDefinition(e) {
  e.preventDefault();
  if (e.target.classList.contains('definition-btn')) {
    let definitionBtnId = e.target.id;
    let wordModel = new WordModel();
    fetch(wordModel.getAPI())
      .then(res => res.json())
      .then(word => {
        let wordView = new WordView();
        wordView.renderWordDetails(word, definitionBtnId)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}