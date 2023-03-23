let 제목 = document.querySelector("#title"); // union type이다.

// HTML 조작시 narrowing 방법 5개

// 1. if
if (제목 !== null) {
  // narrowing 해줘야한다.
  제목.innerHTML = "반가워요";
}

// 2. instanceof 연산자. 가장 많이 쓴다.
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}

// 3. as 쓰기
let 제목2 = document.querySelector("#title") as Element; // union type이다.
제목2.innerHTML = "반가워요";

// 4. 오브젝트에 붙이는 ?.
if (제목?.innerHTML !== undefined) {
  // 제목에 innerHTML 있으면 출력해주고 없으면 undefined 뱉으셈 (optional chaining)
  제목.innerHTML = "반가워요";
}

// 5. strict모드 꺼준다. (tsconfig.json에서 false)

//==========================================================================
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  // 태그마다 다르다.
  링크.href = "https://kakao.com";
}

//=====================================================================

// 타스에서 이벤트리스너 부착하기.
let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

let 네이버 = document.querySelectorAll(".naver");
네이버.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
