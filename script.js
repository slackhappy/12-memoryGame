// This function returns the selection of the computer
var userPoint = 0;
var faceUp = []
var assignments = 1;
var divIds = []
var matches = 0

function shufflePositions() {
  //TODO: randomly assign positions to the tiles on the screen
  var choices = ['rock', 'rock', 'paper', 'paper', 'scissors', 'scissors'];
  var shuffled = shuffle(choices)
  shuffled.forEach(addClassesToDivs)

}

function shuffle(array) {
  //TODO: use this method to shuffle the array
  var newArray = []
  var length = array.length

  for(i = 0; i < length; i++) {
    var arrLen = array.length
    var randomPick = Math.floor(Math.random() * arrLen);
    var element = array[randomPick]
    newArray.push(element)
    array.splice(array.indexOf(element), 1)
    arrLen --
  }

  return newArray
}

function addClassesToDivs(element) {
  //TODO: randomly assign ids to the divs
  var div =  "<div id=\"" + assignments +"\" class=\""+ element + " token\">Worked</div>"
  assignments ++
  $(".game").append(div)
}

function clearBoard() {
  $(".game").empty()
}

function checkCardMatch(array) {
  //TODO: check to see if the value of the 2 face up cards match
  if (array[0] === array[1]) {
    window.x = array[0]
    matches ++
    $("#" + divIds[0]).addClass("matched")
    $("#" + divIds[1]).addClass("matched")
    divIds = []
    console.log("Found match!")
  } else {
    divIds = []
    console.log("No match")
  }
}

function assignImages() {
 //TODO: once the html tiles are shuffled dynamically add images to them
}

function setPoint() {
    $('#userPoint').text(userPoint);
}

function evaluate( evt ) {
    var userValue = evt.target.getAttribute('class');
    var divID = evt.target.getAttribute("id");
    faceUp.push(userValue)
    divIds.push(divID)

    if (faceUp.length == 2) {
      checkCardMatch(faceUp)
      faceUp = []
    }

    if (matches == 3) {
      alert("You win!")
      matches = 0
      clearBoard()
      playGame()
    }
}

function playGame() {
  shufflePositions();
  $("#card").flip({
    trigger: 'click'
  })
    function bop(elm){
        $(elm).fadeOut('fast').delay(1).fadeIn('fast');
    }

    $('.token').click( function(e) {

        bop(this);
        evaluate(e);
    });
}


$(document).ready(function(){
  playGame()
});
