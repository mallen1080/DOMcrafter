var Board = require('./snake.js');
(function() {

  var View = function ($el) {
    this.$el = $el;
    this.board = new Board();

    this.$el.$l.on()

  };

})();


window.onkeyup = function checkKey(e) {
  console.log(e)
};
