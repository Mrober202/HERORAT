var _ = require("lodash");

var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
  this.talk = function() {
    console.log("My name is " + this.name);
  }
}

Hero.prototype = {
  addTask: function(task) {
    this.tasks.push(task);
  },

  eat: function(food) {
    if(food.touched === true) {
      this.health -= food.repValue;
    } else {
     if(this.favouriteFood === food){
      this.health += (food.repValue * 1.5)
    } else {
      this.health += food.repValue;
    }
  }
},

sortBy: function(type) {
  return _.sortBy(this.tasks, type).reverse();
},

marked: function(status) {
  return _.filter(this.tasks, {complete: status});
}



};

module.exports = Hero;