// This function returns the selection of the computer
            var userPoint = 0;
            var faceUp = []
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

              for(i = 0; i < 6; i++) {
                var randomPick = Math.floor(Math.random() * length);
                var element = array[randomPick]
                newArray.push(element)
                array.splice(array.indexOf(element), 1)
                length = array.length
              }

              return newArray
            }

            function addClassesToDivs(element) {
              //TODO: randomly assign classes to the divs
              var div =  "<div id=\"" + element +"\" class=\"token\">Worked</div>"
              $(".game").append(div)
            }

            function clearBoard() {
              $(".game").empty()
            }

            function checkCardMatch(array) {
              //TODO: check to see if the value of the 2 face up cards match
              if (array[0] === array[1]) {
                matches ++
                console.log("Found match!")
              } else {
                console.log("No match")
              }

            }

            function setPoint() {
                $('#userPoint').text(userPoint);
                $('#aiPoint').text(aiPoint);
            }

            function evaluate( evt ){
                var userValue = evt.target.getAttribute('id');
                faceUp.push(userValue)

                $('#userChoice').text('Your choice: ' + userValue);

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
                setPoint();
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
