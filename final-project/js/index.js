import WordView from "./view.js";

const myToken = 'ff0ae246-89ef-493b-ae2a-abf4bc45581f';
const API = `https://dictionaryapi.com/api/v3/references/collegiate/json/`;
const searchBtn = document.getElementById('search-btn');
const wordList = document.getElementById('word');
const wordDetailsContent = document.querySelector('.word-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');



// event listeners
searchBtn.addEventListener('click', getWordList);
// // wordList.addEventListener('click', getWordDefinition);
// // definitionCloseBtn.addEventListener('click', () => {
// //   wordDetailsContent.parentElement.classList.remove('showDefinition');
// // })

// get word list that matches with the search
function getWordList() {
  let searchInputTxt = document.getElementById('search-input').value.trim();
  let url_api = `${API}${searchInputTxt}?key=${myToken}`;
  // let word = new WordView();
  fetch(url_api)
    .then(res => res.json())
    .then(data => renderWord(data))
}

function renderWord(word) {
  let wordItem = document.createElement('div');
  let wordName = document.createElement('div');
  wordItem.classList.add('word-item');
  wordName.classList.add('word-name');
  wordName.innerHTML = `
    <h3>${word[0].meta.id}</h3>
    <p>${word[0].fl}</p>
    <p>${word[0].shortdef}</p>
    `;
  wordItem.appendChild(wordName);
  console.log(wordItem)
  wordList.appendChild(wordItem);
  return wordItem;
}


// data[0].meta.id => get the id word (title)
// data[0].fl => get the functional label word (subtitle)
// data[0].shortdef => returns an array of short definitions


// function getWordList() {
//   let searchInputTxt = 'champion';
//   fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchInputTxt}?key=${myToken}`)
//   .then(response => response.json())
//   .then(data => {
//     let html = "";
//     if (data.meals) {
//       // data.meals.forEach(meal => {
//       //   html += `
//       //   <div class="meal-item" data-id="${meal.idMeal}">
//       //     <div class="meal-name">
//       //       <h3>${meal.strMeal}</h3>
//       //       <a href="#" class="recipe-btn">Get Recipe</a>
//       //     </div>
//       //   </div>
//       //   `
//       // });
//       // mealList.classList.remove('notFound');
//     } else {
//       html = 'Sorry, we didn\'t find any meal';
//       mealList.classList.add('notFound');
//     }
//     mealList.innerHTML = html;
//   })
// }

// // get recipe of the meal
// function getMealRecipe(e) {
//   e.preventDefault();
//   if (e.target.classList.contains('recipe-btn')) {
//     let mealItem = e.target.parentElement.parentElement;
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
//     .then(response => response.json())
//     .then(data => mealRecipeModal(data.meals))
//   }
// }

// // create a modal
// function mealRecipeModal(meal) {
//   console.log(meal);
//   meal = meal[0];
//   let html = `
//     <h2 class="recipe-title">${meal.strMeal}</h2>
//     <p class="recipe-category">${meal.strCategory}<p>
//     <div class="recipe-instruct">
//       <h3>Instructions:</h3>
//       <p>${meal.strInstructions}</p>
//     </div>
//     <div class="recipe-meal-img">
//       <img src="${meal.strMealThumb}" alt="">
//     </div>
//     <div class="recipe-link">
//       <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
//     </div>
//   `;
//   mealDetailsContent.innerHTML = html;
//   mealDetailsContent.parentElement.classList.add('showRecipe');
// }