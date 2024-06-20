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
  let total = 0;
  let weights = [0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2]; // 각 입력 필드에 적용할 가중치

  // 각 입력 필드의 값을 읽고, 가중치를 적용하여 총합 계산
  for (let i = 1; i <= 7; i++) {
    let input = document.getElementById(`sub${i}`);
    let score = parseInt(input.value) || 0; // 입력값을 정수로 변환하고, 잘못된 입력은 0으로 처리
    total += score * weights[i - 1]; // 가중치 적용
  }

  // 결과 출력
  let result = document.getElementById("result");
  result.innerHTML = `종합 평가 점수 : ${Math.round(total)}점`; // 결과값을 반올림하여 정수로 표시

  document.querySelector("footer").style.display = "block"; // 결과를 보여주기 위해 footer를 표시
}

/*
  작동 방식

1. input.value: 
이 부분은 HTML <input> 요소에서 사용자가 입력한 값을 가져옵니다. 이 값은 문자열 형태입니다.

2. parseInt(input.value): 
parseInt() 함수는 주어진 문자열을 파싱하여 정수로 변환합니다. 
문자열이 정수로 시작하는 경우, 그 정수 부분만 반환하고, 그렇지 않으면 NaN (Not a Number)을 반환합니다. 
예를 들어, 사용자가 "123"을 입력하면 123으로 변환되고, "abc"나 "123abc"를 입력하면 NaN을 반환합니다.

3. || 0: 
이 부분은 논리 OR 연산자입니다. JavaScript에서 NaN은 falsy 값입니다. 
따라서 parseInt()의 결과가 NaN인 경우, 즉 입력값이 숫자로 변환될 수 없는 경우, 
OR 연산자의 두 번째 피연산자인 0이 결과값으로 사용됩니다.

예시
사용자가 "50"을 입력한 경우:
parseInt("50")는 50을 반환합니다.
50 || 0은 50이 truthy 값이므로 50이 최종 결과가 됩니다.

사용자가 "text"를 입력한 경우:
parseInt("text")는 NaN을 반환합니다.
NaN || 0은 NaN이 falsy 값이므로 0이 최종 결과가 됩니다.

사용자가 공백(" ")을 입력한 경우:
parseInt(" ")는 NaN을 반환합니다.
NaN || 0은 NaN이 falsy 값이므로 0이 최종 결과가 됩니다.

이 코드는 입력값이 숫자가 아닌 경우를 안전하게 처리하여, 
프로그램이 예상치 못한 문자열 입력으로 인해 오류를 발생시키지 않도록 합니다. 
결과적으로, 모든 잘못된 입력은 0으로 처리되어 계산에 사용됩니다.
  */
