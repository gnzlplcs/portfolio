// Hike View Handler
export default class HikesView {
  constructor(listElementId) {
    this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
  }

  renderHikeList(hikeList, listElement) {
    // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
    hikeList.innerHTML = "";
    listElement.forEach(hike => {
      hikeList.appendChild(this.renderOneHikeLight(hike));
    })
  }

  renderOneHikeLight(hike) {
    // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty
    const item = document.createElement('li');
    item.classList.add('light');
    item.setAttribute('data-name', hike.name);
    item.innerHTML = `
      <h2>${hike.name}</h2>
      <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
      <div>
        <div>
          <h3>Distance</h3>
          <p>${hike.distance}</p>
        </div>
        <div>
          <h3>Difficulty</h3>
          <p>${hike.difficulty}</p>
        </div>
      </div>
    `;
    return item;
  }

  renderOneHikeFull(parentElement, hike) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal!
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt; All Hikes';
    const item = document.createElement('li');
    item.innerHTML = `
      <img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
      <h2>${hike.name}</h2>
      <div>
          <h3>Distance</h3>
          <p>${hike.distance}</p>
      </div>
      <div>
          <h3>Difficulty</h3>
          <p>${hike.difficulty}</p>
      </div>
      <div>
          <h3>Description</h3>
          <p>${hike.description}</p>
      </div>
      <div>
          <h3>How to get there</h3>
          <p>${hike.directions}</p>
      </div>
    `;
    parentElement.innerHTML = '';
    item.insertBefore(backButton, item.childNodes[0]);
    parentElement.appendChild(item);
    return backButton;
  }
}