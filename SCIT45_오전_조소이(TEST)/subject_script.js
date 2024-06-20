// 입력란에 keyup 이벤트 발생시
// 해당 태그의 id값을 통해 여러 element를 가져오는 방식
function scoreInput(i) {
  document.getElementById("score" + i).style.display = "inline";
  const score = document.getElementById("input" + i).value;

  // 유효성 검사
  if (isNaN(score) || score == "" || score < 0 || score > 20) {
    if (isNaN(score)) alert("숫자를 입력하세요");
    else alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");

    document.getElementById("input" + i).value = null;
    document.getElementById("score" + i).style.display = "none";
    return;
  }
  document.getElementById("score" + i).innerText =
    "[예상점수] " + score * 5 + "점";
}

// 최종 결과 확인 버튼에 click 이벤트 발생시 합격/불합격 여부를 출력하는 함수
function resultCheck() {
  document.querySelector("footer").style.display = "inline";
  var sum = 0;
  var cnt = 0;
  for (var i = 1; i <= 5; i++) {
    const score = document.getElementById("input" + i).value * 5;
    if (score < 40) cnt++;
    sum += score;
  }
  if (cnt == 0 && sum / 5 >= 60)
    document.getElementById("finalResult").innerText = "합격";
  else document.getElementById("finalResult").innerText = "불합격";

  document.getElementById("scoreAvg").innerText = sum / 5;
  document.getElementById("failCount").innerText = cnt + "과목";
}
