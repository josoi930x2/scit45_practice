// javascript 작성

function keyup() {
  let inputs = document.querySelectorAll(".correct"); // 모든 입력 필드 선택
  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i]; //n번째 배열을 input에 저장
    let text = input.value; //n번째 배열의 값에 있는 맞춘 개수(숫자) 추출

    if (isNaN(text)) {
      // 맞춘 개수가 is Not a Number 즉, 숫자가 아닐경우 true반환
      alert("숫자만 입력하세요");
      input.value = ""; //맞춘 개수 text창 초기화
      continue;
    }

    let number = parseInt(text);
    if (number < 0 || number > 100) {
      alert("숫자만 입력하세요");
      input.value = "";
    } else {
      continue;
    }
  }
}

function btn() {
  let sub1 = parseInt(document.getElementById("sub1").value);
  let sub2 = parseInt(document.getElementById("sub2").value);
  let sub3 = parseInt(document.getElementById("sub3").value);
  let sub4 = parseInt(document.getElementById("sub4").value);

  let sub5 = parseInt(document.getElementById("sub5").value);
  let sub6 = parseInt(document.getElementById("sub6").value);
  let sub7 = parseInt(document.getElementById("sub7").value);

  // 미입력값 처리
  let blank_check = [sub1, sub2, sub3, sub4, sub5, sub6, sub7];
  for (let i = 0; i < blank_check.length; i++) {
    if (blank_check[i] == null) {
      blank_check[i] = 0;
    }
  }

  //이하 총합 점수계산
  let ten = parseInt((sub1 + sub2 + sub3 + sub4) * 0.1);
  console.log(ten);
  let twenty = parseInt((sub5 + sub6 + sub7) * 0.2);

  let total = parseInt(ten + twenty);

  let result = document.getElementById("result");
  result.innerHTML = `종합 평가 점수 : ${total}점`;

  document.querySelector("footer").style.display = "block";
}
