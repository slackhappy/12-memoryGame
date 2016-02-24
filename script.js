
var faceUp = null;
var matches = 0;

function fillBoard() {
  //TODO: randomly assign positions to the tiles on the screen call
  // addTileToBoard here
  // Hint: You can use a forEach or a for loop
  var tiles = [
    "lays",
    "doritos",
    "cheetos",
    "fritos",
    "tostitos",
    "ruffles",
    "smartfood",
    "sunchips",
  ];
  var doubleTiles = [];
  for (var i = 0; i < tiles.length; i++) {
    doubleTiles.push(tiles[i]);
    doubleTiles.push(tiles[i]);
  }
  var shuffled = shuffle(doubleTiles);
  for (var i = 0; i < shuffled.length; i++) {
    addTileToBoard(shuffled[i]);
  }
};

function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = [];
  var length = array.length;

  for(i = 0; i < length; i++) {
    var arrLen = array.length;
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick];
    newArray.push(element);
    array.splice(array.indexOf(element), 1);
    arrLen --;
  }

  return newArray;
};

function addTileToBoard(element) {
  //TODO: randomly assign ids to the divs
  var div = '<div class="tile ' + element + ' hidden" data-type="' + element +'"></div>';
  $(".game").append(div);
};


function evaluate( target ) {
  if (faceUp) {
    if ($(faceUp).data('type') == $(target).data('type')) {
      matches++;
      faceUp = null;
    } else {
      window.setTimeout(function () {
        $(target).toggleClass("hidden");
        $(faceUp).toggleClass("hidden");
        faceUp = null;
      }, 500);
    }
  } else {
    faceUp = target;
  }
};


$(document).ready(function() {
  fillBoard();
  $('.tile').click( function(e) {
      var target = e.target;
      if ($(target).hasClass("hidden")) {
        $(target).toggleClass("hidden");
        evaluate(target);
      }
  });
});
