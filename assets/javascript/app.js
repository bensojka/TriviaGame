    //  Interval Timer
    //  Set our number counter to 100.
    var number = 120;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    window.onload = function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...the quiz automatically submits.
        submitQuiz();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }




  function submitQuiz() {
    console.log("submitted");
    // run the stop Function
    stop();
    window.alert("Your final score is located below the timer. If you got any questions wrong the correct answer will appear after each missed question.");

  // get each answer score
    function answerScore (qName) {
      var radiosNo = document.getElementsByName(qName);

      for (var i = 0, length = radiosNo.length; i < length; i++) {
          if (radiosNo[i].checked) {
      // do something with radiosNo
          var answerValue = Number(radiosNo[i].value);
        }
      }
      // change NaNs to zero
      if (isNaN(answerValue)) {
        answerValue = 0;
      }
      return answerValue;
    }

  // calc score with answerScore function
    var calcScore = (answerScore("q1") + answerScore("q2") + answerScore("q3") + answerScore("q4") + 
      answerScore("q5") + answerScore("q6") + answerScore("q7") + answerScore("q8") + 
      answerScore("q9") + answerScore("q10") + answerScore("q11") + answerScore("q12"));
    console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
      console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
      return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
        (document.getElementById(correctStringNo).innerHTML) + "</strong>");
      }

  // print correct answers only if wrong (calls correctAnswer function)
    if (answerScore("q1") === 0) {
      document.getElementById("correctAnswer1").innerHTML = correctAnswer("correctString1", 1);
    }
    if (answerScore("q2") === 0) {
      document.getElementById("correctAnswer2").innerHTML = correctAnswer("correctString2", 2);
    }
    if (answerScore("q3") === 0) {
      document.getElementById("correctAnswer3").innerHTML = correctAnswer("correctString3", 3);
    }
    if (answerScore("q4") === 0) {
      document.getElementById("correctAnswer4").innerHTML = correctAnswer("correctString4", 4);
    }
    if (answerScore("q5") === 0) {
      document.getElementById("correctAnswer5").innerHTML = correctAnswer("correctString5", 5);
    }
    if (answerScore("q6") === 0) {
      document.getElementById("correctAnswer6").innerHTML = correctAnswer("correctString6", 6);
    }
    if (answerScore("q7") === 0) {
      document.getElementById("correctAnswer7").innerHTML = correctAnswer("correctString7", 7);
    }
    if (answerScore("q8") === 0) {
      document.getElementById("correctAnswer8").innerHTML = correctAnswer("correctString8", 8);
    }    
    if (answerScore("q9") === 0) {
      document.getElementById("correctAnswer9").innerHTML = correctAnswer("correctString9", 9);
    }
    if (answerScore("q10") === 0) {
      document.getElementById("correctAnswer10").innerHTML = correctAnswer("correctString10", 10);
    }
    if (answerScore("q11") === 0) {
      document.getElementById("correctAnswer11").innerHTML = correctAnswer("correctString11", 11);
    }
    if (answerScore("q12") === 0) {
      document.getElementById("correctAnswer12").innerHTML = correctAnswer("correctString12", 12);
    }    

  // calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName("question");

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
      questionCounter++;
    }

  // show score as "score/possible score"
    var showScore = calcScore +"/" + questionCounter;

  // if 12/12, "perfect score!"
    if (calcScore === questionCounter) {
      showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    $("#font1").html("Your Score: ")
    $("#font2").html(showScore);
  }

$(document).ready(function() {

  $("#submitButton").click(function() {
    $(this).addClass("hide");
    $(window).scrollTop(0);
  });

});