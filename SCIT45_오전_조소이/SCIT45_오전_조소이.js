// javascript 작성

window.onload = function () {
  let scoreInput = document.querySelectorAll(".correct");

  for (let i = 0; i < scoreInput.length; i++) {
    scoreInput[i].addEventListener("keyup", function () {
      let check = isNan(scoreInput[i].value);
      console.log(scoreInput[i].value);
    });
  }
};
