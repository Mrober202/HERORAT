var Rat = function() {
}

Rat.prototype = {
  touch: function(food) {
    food.touched = true;
  }
}

module.exports = Rat;