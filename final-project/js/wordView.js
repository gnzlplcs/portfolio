class WordView {
  constructor() {
    this.wordList = document.getElementById('word');
    this.wordDetailsContent = document.querySelector('.word-details-content');
  }

  renderWordList(word) {
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
              <a href="#" class="definition-btn" id="${w.meta.uuid}">Get Details</a>
            </div>
          </div>
        `;
      });
    } else {
      html = `
        <p>Sorry, we didn\'t find this word</p>
      `;
    }
    this.wordList.innerHTML = html;
  }

  renderWordDetails(word, definitionBtnId) {
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
    this.wordDetailsContent.innerHTML = html;
    this.wordDetailsContent.parentElement.classList.add('showDefinition');
  }
}

export default WordView;