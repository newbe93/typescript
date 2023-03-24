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
class Person1 {
  data: number = 0; // 클래스안에 변수 집어넣을 수 있는데 이걸 필드라고 한다. 타입 지정 가능.
}
let 사람1 = new Person1();
class Person2 {
  name: string; // 필드값에 name이 있어야 constructor 에서 name 지정 가능.
  constructor(a: string) {
    // 파라미터에도 타입지정 해줘야한다.
    this.name = a;
  }
  // prototype 함수 집어넣는 자리.
  함수(a: string) {
    console.log("안녕" + a);
  }
}
let 사람2 = new Person2("kim");
class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    (this.model = a), (this.price = b);
  }
  tax(a: number): number {
    return this.price / 10;
  }
}
class Word {
  num: number[];
  str: string[];
  constructor(...param) {
    let nums: number[] = [];
    let strs: string[] = [];
    param.forEach((a) => {
      if (typeof a == "number") {
        nums.push(a);
      } else {
        strs.push(a);
      }
    });
    this.num = nums;
    this.str = strs;
  }
}
//=================================================================================
type Square = {
  color: string;
  width: number;
};
interface Square2 {
  color: string;
  width: number;
}
let 네모: Square = { color: "red", width: 100 };
let 네모2: Square2 = { color: "red", width: 100 };
// interface 장점 : extends로 복사가능
interface StudentType {
  name: string;
}
interface TeacherType extends StudentType {
  age: number;
}
let 학생: StudentType = { name: "kim" };
let 선생: TeacherType = { name: "kim", age: 20, score: 20 };
// type alias 도 비슷한 기능있다.
type Animal = { name: string };
type Cat = { age: number } & Animal; // 근데 이건 합친다기보단 둘다 만족하는 것을 뜻한다.
// type vs interface
// interface : 중복선언 가능 하면 기존꺼랑 합쳐짐. (외부 라이브러리같은 경우 interface 많이 씀. 유연하니까)
interface TeacherType {
  score: number;
}
// type : 중복선언 불가능
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
interface Cart {
  product: string;
  price: number;
}
let 장바구니: Cart[] = [{ product: "청소기", price: 6000 }];
interface Card extends Cart {
  card: boolean;
}
interface Calculator {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}
var Obj: Calculator = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
function max(...param: number[]) {
  let max = -1;
  for (let i = 0; i < param.length; i++) {
    if (param[i] >= max) max = param[i];
  }
  return max;
}
function 함수8({ user, comment, admin }: { user: string; comment: number[]; admin: boolean }): void {
  console.log(user, comment, admin);
}
function 함수9([a, b, c]: (number | string | boolean)[]): void {
  console.log(a, b, c);
}
//===========================================================================
// Narrowing 할 수 있는 방법 더 알아보기
// 1. && 연산자로 null & undefined 타입 체크하기
function 함수10(a?: number) {
  if (a && typeof a === "number") {
  }
}
// 2. in 키워드로 object narrowing 가능
// 속성명 in 오브젝트자료
type Fish = { swim: string };
type Bird = { fly: string };
function 함수11(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}
// 3. instanceof 연산자
// 오브젝트 instanceof 부모class
let 날짜 = new Date();
if (날짜 instanceof Date) {
}
// 비슷한 object타입이면 literal type을 하나씩 넣어주자 wheel 같은거
type Car1 = {
  wheel: "4개";
  color: string;
};
type Bike1 = {
  wheel: "2개";
  color: string;
};
function 함수12(x: Car1 | Bike1) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입이에요");
  }
}
//===============================================================================
// function return 값에 붙일수있는 never type
// 조건 1. return 값이 없어야함 2. endpoint가 없어야함 (함수실행이 끝나지 않아야함)
// endpoint 가 없다는것은? 2가지 => 에러를 뱉거나, while문으로 무한반복
function 함수13(): never {
  throw new Error(); // 코드실행 중단됨 => 함수가 끝나지않음
}
function 함수14(): never {
  while (true) {}
}
// 실제 코딩에서 never 타입 쓰는법
// 대부분 쓸데없다 :void 타입 쓰면 되는것
// never은 코드 이상하게 짜다보면 한번씩 나온다. => never 타입 등장하면 코드 수정해라
// never 타입 등장하는 경우 1. 뭔가 이상한 narrowing
// 2. 어떤 함수표현식은 return 타입이 자동으로 never
//========================================================================
// ts 장점. js에서 쓸 수 없는 객체지향언어같은 문법도 제공한다.
// public, private, protected, static 키워드
// Public (기본값 굳이 작성하지 않아도 기본으로 적용돼있음.)
class User3 {
  public name = "kim";
  constructor(a) {
    this.name = a;
  }
  public 함수() {}
}
let 유저1 = new User3("park");
유저1.name = "안녕"; // 클래스 밖에서 수정할 수 있다.
// Private => class 안에서만 수정 이용가능
class User4 {
  private name = "kim";
  constructor(a) {
    this.name = a;
  }
  함수() {}
}
let 유저2 = new User4("park");
유저2.name; // class밖에서 이용이 안된다.
// Private 예시
class User5 {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }
}
// 밖에서 변경하는 방법. 변경함수이용용
class User6 {
  name: string;
  private familyName: string = "kim";
  constructor(a) {
    this.name = a + this.familyName;
  }
  이름변경함수() {
    this.familyName = "Park";
  }
}
let 유저6 = new User6("민수");
유저6.familyName;
유저6.이름변경함수();
// =========================================================================
// protected, static
// class 복사 extends
class User7 {
  protected x = 10;
}
class NewUser7 extends User7 {
  doThis() {
    this.x = 20; // extends 된 class에서 x 사용할 수 있다. private라면 사용불가
  }
}
// static
class User8 {
  static x = 10; // static 키워드 붙이면 부모 class에 직접 부여됨. 자식 instance에는 물려주지 않는다.
  y = 20;
}
let 유저8 = new User8();
console.log(유저8.x); //
console.log(유저8.y);
class User9 {
  private static x = 10; // 이런것도 가능
  y = 20;
}
// static 사용 예시
class User10 {
  static skill = "js";
  intro = User10.skill + "전문가 입니다.";
}
let 철수10 = new User10();
console.log(철수10);
User10.skill = "ts";
let 철수10_2 = new User10();
console.log(철수10_2);
// 근데 사실 static 별로고 private 쓰고 수정함수 만들어서 수정하는게 더 안전한 방법이다.
//=========================================================
//숙제
// private는 class에서만 사용가능, static은 부모에서 사용가능, 자식에가 물려주지않음
//
class User11 {
  private static x = 10;
  public static y = 20;
  constructor() {}
  addOne(a: number): void {
    User11.x = User11.x + 3;
  }
  printX() {
    console.log(User11.x);
  }
}
let 유저11 = new User11();
유저11.addOne(3);
class Square3 {
  width;
  height;
  backgroundColor;
  constructor(a, b, c) {
    this.width = a;
    this.height = b;
    this.backgroundColor = c;
  }
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.backgroundColor}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}
let 네모3 = new Square3(30, 30, "red");
네모3.draw();
네모3.draw();
네모3.draw();
네모3.draw();

