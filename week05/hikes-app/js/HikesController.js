import HikeModel from "./HikeModel.js";
import HikesView from "./HikesView.js";

// Hike controller
export default class HikesController {
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId);
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(parentId);
  }

  showHikeList() {
    //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
    const hikeList = this.hikeModel.getAllHikes();
    this.hikesView.renderHikeList(this.parentElement, hikeList);
    this.addHikeListener();
  }

  showOneHike(hikeName) {
    // use this when you need to show just one hike...with full details
    const hike = this.hikeModel.getHikeByName(hikeName);
    const myTouchend = this.hikesView.renderOneHikeFull(this.parentElement, hike);
    myTouchend.ontouchend = () => {
      this.showHikeList();
    };
  }

  addHikeListener() {
    // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend.

    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);
    childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
      });
    });
  }
}