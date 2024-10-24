//Quiz questions page
function submit() {
  let score = 0;
  //question 1
  const correctAnswer1 = document.querySelector(
    "input[name='question1']:checked"
  );
  if (correctAnswer1 && correctAnswer1.id === "correct1") {
    score++;
  }
  //question 2
  const correctAnswer2 = document.querySelector(
    "input[name='question2']:checked"
  );
  if (correctAnswer2 && correctAnswer2.id === "correct2") {
    score++;
  }
  //question 3
  const correctAnswer3 = document.querySelector(
    "input[name='question3']:checked"
  );
  if (correctAnswer3 && correctAnswer3.id === "correct3") {
    score++;
  }
  //question 4
  const correctAnswer4 = document.querySelector(
    "input[name='question4']:checked"
  );
  if (correctAnswer4 && correctAnswer4.id === "correct4") {
    score++;
  }
  //question 5
  const correctAnswer5 = document.querySelector(
    "input[name='question5']:checked"
  );
  if (correctAnswer5 && correctAnswer5.id === "correct5") {
    score++;
  }

  document.getElementById("result").innerHTML = "Your score is " + score;
}
