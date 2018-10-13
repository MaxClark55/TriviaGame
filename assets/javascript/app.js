var timeLeft= 45;
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var intervalId;


function pageLoad() {
  $("#begin").on("click" , play);
  $("#play").hide();
  $("points").hide();
}


function play(){
  $("#play").show();
  $("#begin").hide();
  $("#timeLeft").html("Count Down: "+ timeLeft + " seconds");   
  run();
}

function run(){
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeLeft--;
    $("#timeleft").html("Conut Down: "+ timeLeft + " seconds");   
    
    if (timeLeft === 0) {
      stop();
      endGame();
    }
  }
  function stop() {
    clearInterval(intervalId);
  }
  function endGame(){
    $("#play").hide();
    $("#points").show();
    const Q1 = $('input:radio[name="q1"]:checked').val();
		const Q2 = $('input:radio[name="q2"]:checked').val();
		const Q3 = $('input:radio[name="q3"]:checked').val();
		const Q4 = $('input:radio[name="q4"]:checked').val();
		const Q5 = $('input:radio[name="q5"]:checked').val();
    const Q6 = $('input:radio[name="q6"]:checked').val();
   

    function answers(name, answer){
      if(name === undefined){
        unanswered++;
      }
      else if(name ===
         answer){
        answersRight++;
      }
      else{
        answersWrong++;
      }
    }
    answers(Q1, "Lando Calrissian");
    answers(Q2, "Hayden Christensen");
    answers(Q3, "Darth Tyranus");
    answers(Q4, "Dianoga");
    answers(Q5, "True");
    answers(Q6, "Anthony Daniels");  
    $("#correct").html("Correct  Guesses: " + rightAnswers);
    $("#incorrect").html("Incorrect Guesses: " + wrongAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#points").show();   
  }

  Document.onload = pageLoad();

