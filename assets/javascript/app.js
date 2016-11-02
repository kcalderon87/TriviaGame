$(document).ready(function() {

var number = 60;
var arrayCounter = 0;

var run = function() {
	counter = setInterval(decrement, 1000);
}


function decrement() {
	number--;
	$('#show-number').html('<h2>' + number + '<h2>');

	if (number === 0) {
		stop();
		$('#show-number').html("<h3>Game Over</h3>");
        showResults();

	}
}

function stop() {
	clearInterval(counter);
}

// run();

//Start button
function startButton() {
	// $('#startGame').on('click', function(e) {

    run();
    showQuestion();
    $('#startGame').hide();
	// });
}

	var questions = [{
		question: "What was the first thing God created?",
		choices: [" Animals", " Man", " Heaven and Earth"],
		correctAnswer: 2
	}, 	{
		question: "Noah took how many animals on the ark?",
		choices: [" 2 by 2", " 20", " 4 by 4"],
		correctAnswer: 0
	},	{
		question: "What did Jesus use to turn into wine?",
		choices: [" Tears", " Water", " Urine"],
		correctAnswer: 1
	},	{
		question: "Who did David defeat with a slingshot?",
		choices: [" Saul", " Peter", " Goliath"],
		correctAnswer: 2
	},	{
		question: "What was Jesus' trade?",
		choices: [" Blacksmith", " Carpenter", " Plumber"],
		correctAnswer: 1

	}];

	console.log(questions.correctAnswer);

	var questionCounter = 0;
	var selections = [];
	var quiz = $("#quiz");
	var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
	var numCorrect = 0;
	var inCorrect = 0;
	var unAnswered = 0;

    function displayNext() {
    	// check answer
    	//if correct increase
    	//if incorrect increase wrong
    }
	displayNext();

	$("#next").on("click", function (e) {

		choose();
		questionCounter++;
		displayNext();
	});

	function createQuestionElement(index) {
		var qElement = $('<div>', {
			id: "question"
		});

		var header = $("<h3>Question " + (index + 1) + ":</h3>");
		qElement.append(header);

		var question = $("<h2>").append(questions[index].question);
		qElement.append(question);

		var radioButtons = createRadios(index);
		qElement.append(radioButtons);

		return qElement;
	}

	function createRadios(index) {
		var radioList = $("<ul>");
		var item;
		var input = "";
		for (var i = 0; i < questions[index].choices.length; i++) {
			item = $("<li>");
			input = '<input type="radio" name="answer" value=" + i + " />';
			input += questions[index].choices[i];
			item.append(input);
			radioList.append(item);
		}
		return radioList;
	}

	function choose() {
		selections[questionCounter] = +$('input[name="answer"]:checked').val();
	}

	function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
          $('#restart').hide();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
        $('#restart').show();
      }
    });
  }

	function displayScore() {
		var score = $("<p>",{id: "question"});
		stop();

		for (var i = 0; i < selections.length; i++) {
			if (selections[i] == questions[i].correctAnswer) {
				(numCorrect++); 
			} else if (inCorrect++);
			else if (unAnswered++);
		}

		score.append("<h3>Correct: " + numCorrect + " <br>Incorrect: " + inCorrect + "<br>Unanswered: " + unAnswered + "</h3");

		return score;
	
		if(arrayCounter == questions.length) {
        	stop();
        	$('#show-number').html("<h3>Game Over</h3>");
        	showResults();
   		
   		} 
   			else {
   			showQuestion();
    }


     $('#restart').click(function(){
            restartplay();
 	});

	}






//need to figure out restart button, 
//start button,
//make questions disappear when timer runs out, 
//timer to stop once questions answered,
//fix score keeping
})
