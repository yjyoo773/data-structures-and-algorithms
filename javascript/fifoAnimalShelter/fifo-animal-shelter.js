"use strict";

const Queue = require("../stacksAndQueues/queue");

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      this.dog.enqueue(animal);
      return this.dog
    } else if (animal.type === "cat") {
      this.cat.enqueue(animal);
      return this.cat
    } else {
      return "We only take cats and dogs"
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      return this.dog.dequeue();
    } else if (pref === "cat") {
      return this.cat.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter