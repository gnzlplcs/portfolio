class WordModel {
  constructor() {
    this.API = `https://dictionaryapi.com/api/v3/references/collegiate/json/`;
    this.myToken = 'ff0ae246-89ef-493b-ae2a-abf4bc45581f';
    this.searchInputTxt = document.getElementById('search-input').value.trim();
  }

  getAPI() {
    let url_api = `${this.API}${this.searchInputTxt}?key=${this.myToken}`;
    return url_api;
  }
}

export default WordModel;