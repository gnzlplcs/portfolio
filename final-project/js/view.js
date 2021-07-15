// Components to print in the page
class WordView {
  renderWord(word) {
    let wordItem = document.createElement('div');
    let wordName = document.createElement('div');
    wordItem.classList.add('word-item');
    wordName.classList.add('word-name');
    wordName.innerHTML = `
      <h3>${word[0].id}</h3>
      <p>${word[0].fl}</p>
      <p>${word[0].shortdef}</p>
    `;
    wordItem.appendChild(wordName);
    return wordItem;
  }
}

export default WordView;