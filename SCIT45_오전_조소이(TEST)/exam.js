// 페이지 로딩
window.onload = function () {
  let tags = document.querySelectorAll("input[type='text']");

  // 입력태그들에 keyup 이벤트 발생시 유효성검사하는 함수 실행
  for (let i = 0; i < tags.length; ++i) {
    tags[i].addEventListener("keyup", subjetInput);
  }

  // 결과 확인 버튼의 클릭 이벤트 발생시 점수 계산 및 출력
  document.querySelector("#confirm").addEventListener("click", function () {
    // DIV 영역 보이게
    document.querySelector(".resultBox").style.display = "block";

    let sum = parseInt(0);
    // 해당 클래스명을 가진 다수의 element들이 배열로 저장됨
    let grades = document.querySelectorAll(".grade");
    let projects = document.querySelectorAll(".project");

    // 반복문을 이용하여 입력한 점수를 가져옴
    for (let i = 0; i < grades.length; ++i) {
      // value값이 숫자가 아니거나 '' 이면 0
      grades[i].value = valueCheck(grades[i].value);
      sum += parseInt(grades[i].value) * 0.1; // 반영 비율 계산
    }
    for (let i = 0; i < projects.length; ++i) {
      projects[i].value = valueCheck(projects[i].value);
      sum += parseInt(projects[i].value) * 0.2; // 반영 비율 계산
    }
    let attend = document.querySelector(".attend").value;
    attend = valueCheck(attend);
    sum += parseInt(attend) * 0.2; // 반영 비율 계산

    // 최종 점수 출력
    document.querySelector("#total").innerText = sum;
  });
};

function subjetInput() {
  let subjectScore = this.value;

  //잘못 입력된 데이터를 거르는 작업
  //숫자 0~20사이, 문자는 안됨
  if (
    subjectScore == "" ||
    isNaN(subjectScore) ||
    subjectScore < 0 ||
    subjectScore > 100
  ) {
    alert("숫자만 입력해주세요");
    this.focus();
    this.select();
    return;
  }
}

// value 체크: 숫자가 아니거나 '' 이면 0 아니면 파라미터값 그대로 return
function valueCheck(value) {
  return (isNaN(value) || value) === "" ? 0 : value;
}
