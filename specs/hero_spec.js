var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");
var Rat = require("../rat.js")

describe("Hero", function() {

  var hero;
  var task1;
  var task2;
  var task3;
  var task4;
  var food1;
  var food2;
  
beforeEach(function() {
  task1 = new Task(9, 4, 1000);
  task2 = new Task(3, 8, 1000000);
  task3 = new Task(5, 7, 14200);
  task4 = new Task(2, 1, 14);  
  food1 = new Food("Burger", 10);
  food2 = new Food("Quiche", 3);
  hero = new Hero("Batman", 60, food1);


})

it("should be able to eat food and health should go up by replenishment value", function() {
  hero.eat(food2);
  assert.strictEqual(hero.health, 63);
})

it("should raise health more when eats favourite food", function() {
  hero.eat(food1);
  assert.strictEqual(hero.health, 75);
})

it("should be able to sort tasks by difficulty, urgency or reward", function() {
 hero.addTask(task1);
 hero.addTask(task2);
 hero.addTask(task3);
 hero.addTask(task4);
 assert.deepEqual(hero.sortBy('reward'), [task2, task3, task1, task4]);
 assert.deepEqual(hero.sortBy('difficulty'), [task1, task3, task2, task4]);
 assert.deepEqual(hero.sortBy('urgency'), [task2, task3, task1, task4]);
})

it("should be able to view tasks that are marked as complete or incomplete", function() {
  task1.complete = true;
  task2.complete = false;
  task3.complete = true;
  task4.complete = false;
  hero.addTask(task1);
  hero.addTask(task2);
  hero.addTask(task3);
  hero.addTask(task4);
  assert.deepEqual(hero.marked(true), [task1, task3]);
  assert.deepEqual(hero.marked(false), [task2, task4]);
})

it("should loose health when eats poisoned food", function() {
  var rat = new Rat();
  rat.touch(food1);
  hero.eat(food1);
  hero.eat(food2);
  assert.strictEqual(hero.health, 53);
})

})