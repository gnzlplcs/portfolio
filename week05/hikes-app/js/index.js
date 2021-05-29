// The next step is to let our HTML know about our modules. In the index.js file import in your Controller, create an instance of the class, then call the showHikeList() method. You may want to console.log something out from that method until we create it to help us know if everything is working correctly. If there are errors, fix them :) If not move on to the next step. Make sure that showHikeList() does not get called before the DOM is ready.

import HikesController from './HikesController.js';

const myHikesController = new HikesController('hikes');

window.addEventListener('load', () => {
  myHikesController.showHikeList();
});