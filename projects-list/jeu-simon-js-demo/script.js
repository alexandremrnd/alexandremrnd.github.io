$(document).ready(
    function () {
        var listCorrectPositions = [];
        var inAnimation = false;
        var solutionCount = 2;
        var level = 1;
        var launch = false;
        var playing = false;
        var move;

        $('.level').text('Cliquez ici');

        for(var i = 1; i <= 4; i++) {
            initShape(i);
        }

        function newGame() {
            move = 1;
            $('.level').text('Level ' + level);
            for(var i = 0 ; i < solutionCount ; i++){
                var position = Math.floor((Math.random() * 4) + 1);
                listCorrectPositions[i] = position;
            }
            playing = false;
            setTimeout(() => {animation(0)}, 500);
            setTimeout(() => {playing = true}, 2 * 300 * solutionCount);
        }

        function animation(position) {
            if(position != solutionCount){
                $('.shape' + listCorrectPositions[position]).trigger("click");
                setTimeout(() => {animation(position + 1)}, 500);
            }
        }

        function initShape(shape) {
            $('.shape' + shape).click(function() {
                if (!inAnimation) {
                    $(this).animate({opacity:'+=0.3'}, 300);
                    $(this).animate({opacity:'-=0.3'}, 300);
                    var sound = new Audio($(this).children().children().attr('src'));
                    sound.play();

                    if (playing) {
                        if (shape == listCorrectPositions[move - 1]) {
                            if (move == solutionCount) {
                                level++;
                                solutionCount++;
                                listCorrectPositions = [];
                                newGame();
                            } else {
                                move++;
                            }
                        } else {
                            $('.level').text('Vous avez perdu!');
                            var gameoversound = new Audio("sounds/mp3/failsound.mp3");
                            gameoversound.play();
                            playing = false;
                        }
                    }
                }
            });
        }

        $('.circle').click(
            function() {
                if (!launch) {
                    launch = true;
                    newGame();
                }
            }
        )
    }
);