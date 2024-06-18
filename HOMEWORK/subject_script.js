// javascript 작성

function keyup() {
  let inputs = document.querySelectorAll(".correct"); // 모든 입력 필드 선택
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]; //n번째 배열을 input에 저장
    let text = input.value; //n번째 배열의 값에 있는 맞춘 개수(숫자) 추출
    let target = document.getElementById(`mark${i + 1}`); // 해당 입력 필드에 맞는 예상 점수 출력 위치 선택

    if (text === "") {
      // 맞춘 개수가 빈칸이면 예상 점수가 안보이도록
      target.style.display = "none";
      continue;
    }

    if (isNaN(text)) {
      // 맞춘 개수가 is Not a Number 즉, 숫자가 아닐경우 true반환
      alert("숫자를 입력하세요");
      input.value = ""; //맞춘 개수 text창 초기화
      target.style.display = "none";
      continue;
    }

    let number = parseInt(text);
    if (number < 0 || number > 20) {
      alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
      input.value = "";
      target.style.display = "none";
    } else {
      let score = number * 5;
      target.innerHTML = "[예상점수] " + score + "점";
      target.style.display = "inline-block";
    }
  }
}

function btn() {
  let inputs = document.querySelectorAll(".correct");
  let total = 0;
  let failCount = 0;

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    let score = parseInt(input.value) * 5;

    if (score < 40) {
      failCount++; // 40점 이하인 과목수
    }
    total += score; // 평균을 구하기 위한 합계
  }

  let average = total / 5;
  let ultotal = document.getElementById("total");
  ultotal.innerHTML = `<li>평균: ${average}</li><li>과락된 과목수: ${failCount}</li>`;

  let result = document.getElementById("result");
  if (failCount > 0 || average < 60) {
    result.innerHTML = "불합격";
  } else {
    result.innerHTML = "합격";
  }

  document.querySelector("footer").style.display = "block";
}
