(function() {
  var Snake = function() {
    this.direction = "N";
    this.segments = [[10,10]];
  };

  Snake.prototype.move = function () {
    var x = this.segments[0][0];
    var y = this.segments[0][1];
    switch (this.direction) {
      case "N":
        y -= 1;
       break;
     case "S":
       y += 1;
      break;
      case "E":
        x += 1;
       break;
     case "W":
       x -= 1;
      break;
    }
    if (x > 19) { x -= 20; }
    if (y > 19) { y -= 20; }
    if (x < 0) { x += 20; }
    if (y < 0) { y += 20; }

    this.segments.pop();
    this.segments.unshift([x,y]);
  };

  Snake.prototype.turn = function (direction) {
    this.direction = direction;
  };

  var Board = function () {
    this.snake = new Snake();
  };




module.exports(Board);
})();
