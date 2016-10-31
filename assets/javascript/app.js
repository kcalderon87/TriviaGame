$(document).ready(function() {

var number = 121;

function run() {
	counter = setInterval(decrement, 1000);
}

function decrement() {
	number--;
	$('#show-number').html('<h2>' + number + '<h2>');

	if (number === 0) {
		stop();
		alert('Times Up!');
	}
}

function stop() {
	clearInterval(counter);
}

run();

	var questions = [{
		question: "What was the first thing God created?",
		choices: [" Anmals", " Man", " Heavens and Earth"],
		correctAnswer: 2
	}, 	{
		question: "Noah took how many animals on the ark?",
		choices: [" 2 by 2", " 20", " 4 by 4"],
		correctAnswer: 0
	},	{
		question: "Who did David defeat with a slingshot?",
		choices: [" Saul", " Peter", " Goliath"],
		correctAnswer: 2
	},	{
		question: "What was Jesus' trade?",
		choices: [" Blacksmith", " Carpenter", " Plumber"],
		correctAnswer: 1
	}];

	var questionCounter = 0;
	var selections = [];
	var quiz = $("#quiz");

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
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

	function displayScore() {
		var score = $("<p>",{id: "question"});

		var numCorrect = 0;
		var inCorrect = 0;
		for (var i = 0; i < selections.length; i++) {
			if (selections[i] == questions[i].correctAnswer) {
				numCorrect++; 
			}
			else if (inCorrect++);
		}

		score.append("<h3>You got " + numCorrect + " correct and " + inCorrect + " wrong!<h3>");

		return score;
	}





//end of document.ready function
})
