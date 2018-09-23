
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answers").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = {
		questions: ['Who was the host for Kitchen Kabaret?',
								'Who starred in the title role of Condorman?',
								'In Captain EO, what is the name of the elephant like alien?',
								'The 1980\'s were big for new personal computer introductions. Which of the following computers was introduced in 1980?',
								'What country was welcomed into the World Showcase at EPCOT Center in 1984?',
								'In 1981 a Disney constructed WED-Way People Mover opened at which airport?',
								'What school is attended in the Disney Channel Series, Girl Meets World?',
								'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',
								'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',
								'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?'],
		q1: ['A. Fud Wrapper',
				 'B. Cookie Ann Milk',
				 'C. Bonnie Appetit',
				 'D. Cherry Ontop'],
		q2: ['A. Zac Efron',
				 'B. Michael Crawford',
				 'C. Billy Crystal',
				 'D. Michael Keaton'],
		q3: ['A. Trunks',
				 'B. Hooter',
				 'C. Elle',
				 'D. Odie'],
		q4: ['A. Sinclair ZX80',
				 'B. IBM PC',
				 'C. Commodore 64',
				 'D. Atari 2600'],
		q5: ['A. Norway',
				 'B. Morocco',
				 'C. France',
				 'D. Japan'],
		q6: ['A. Houston Intercontinental Airport',
				 'B. Orlando International Airport',
				 'C. Atlanta International Airport',
				 'D. Dallas/Ft. Worth International Airport'],
		q7: ['A. Vintage High School',
				 'B. Peyton Middle School',
				 'C. John Quincy Adams Middle School',
				 'D. Washington High School'],
		q8: ['A. Typhoon Lagoon',
				 'B. Pleasure Island',
				 'C. Both A & B',
				 'D. None of the above'],
		q9: ['A. The Night Before Christmas',
				 'B. Three Little Pigs',
				 'C. The Old Mill',
				 'D. The Gallopin\' Gaucho'],
		q10: ['A. Recycling used film footage',
				  'B. Designing US Army & US Navy insignia',
				  'C. Hosted a Studio Victory Garden where employees grew food for their families',
				  'D. Forced employees to carpool by closing parking lots to non-carpool cars']		 						
	}
*/
var correct = 0;
var wrong = 0;
var question1 = {
	q : 'What is the name of the vicious tree that Harry and Ron drove into in Harry Potter and the Chamber of Secrets?',
	answers : ['A. The Whomping Willow',
				 'B. The Black Haven',
				 'C. The Dark Upriser',
				 'D. The Killer Machine'],
	flags : [true, false, false, false],
	ans : 'A. The Whmping willow'
};

var question2 = {
	q: "What is Hermione's middle name?",
	answers: ['A. Zac',
				 'B. Jean',
				 'C. Michelle',
				 'D. Elizabeth'],
	flags : [false, true, false, false],
	ans : 'B. Jean'
};

var question3 = {
	q : "What is Dumbledore's sister's name?",
	answers : ['A. Francesca',
				 'B. Ariana',
				 'C. Selena',
				 'D. Jennifer'],
	flags : [false, true, false, false],
	ans : 'B. Ariana'
};

var question4 = {
	q : "Who was the half-blood prince?",
	answers : ['A. Snape',
				 'B. Harry Potter',
				 'C. Dumbledore',
				 'D. Voldemort'],
	flags : [true, false, false, false],
	ans : 'A. Snape'
};

var question5 = {
	q : "What shape does Harry's patronus take?",
	answers : ['A. bear',
				 'B. stag',
				 'C. dog',
				 'D. human'],
	flags : [false, true, false, false],
	ans : 'B. stag'
};

var question6 = {
	q : "What was the former name of Lord Voldemort?",
	answers : ['A. Tom Riddle',
				 'B. John McClain',
				 'C. Ross Peters',
				 'D. John Cena'],
	flags : [true, false, false, false],
	ans : 'A. Tom Riddle'
};

var question7 = {
	q : "What is the name of Voldemort's prized snake?",
	answers : ['A. Vintage',
				 'B. Peyton',
				 'C. Nagini',
				 'D. Nagrajan'],
	flags : [false, false, true, false],
	ans : 'C. Nagini'
};

var question8 = {
	q : "What is the name of the school that all witches and wizards attended in Britan?",
	answers : ['A. Typhoon Lagoon',
				 'B. Hogwarts',
				 'C. Durmstrang',
				 'D. Beauxbatons'],
	flags : [false, true, false, false],
	ans : 'B. Hogwarts'
};

var question9 = {
	q : "What are the creatures who suck the soul out of people called?",
	answers : ['A. Suckers',
				 'B. Soul Eaters',
				 'C. Killers',
				 'D. Dementors' ],
	flags : [false, false, false, true],
	ans : 'D. Demontors'
};

var question10 = {
	q : "What did Lavender Brown call Ron?",
	answers : ['A. Ron-Ron',
				  'B. Won-Won',
				  'C. Wee-Wee',
				  'D. Sweetheart'],
	flags : [false, true, false, false],
	ans : 'B. Won-Won'
}

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].q + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].answers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].answers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].answers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].answers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answer').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
var answerChosen
setup();
$('.answers').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
    answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});