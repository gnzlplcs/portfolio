import QuakesController from "./QuakesController";

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.getQuakesByRadius();