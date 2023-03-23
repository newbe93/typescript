let 이름: string = "kim";

let 나이: number = 50;

let 결혼했니: boolean = true;

let 널: null = null;

let 언디파인: undefined = undefined;

let 회원들: string[] = ["kim", "park"];
let 나이들: number[] = [12, 20];

let 김씨: { name: string; age: number } = { name: "kim", age: 20 };

// 온갖 곳에 다 타입지정할 필요 없다. 타입지정 원래 자동으로 됨
let 김 = "kim";

let 나: { 이름: string; 나이: number; 출생지역: string } = { 이름: "shin", 나이: 31, 출생지역: "서울" };
let 제일좋아하는가수: { 이름: string; 곡: string } = { 이름: "태연", 곡: "날개" };

let project: { member: string[]; days: number; started: boolean } = { member: ["kim", "park"], days: 30, started: true };

let 회원: number | string = 123; // Union type
let people: (number | string)[] = [1, "2", 3];
let object: { a: string | number } = { a: 123 };

let 애니: any; // 타입실드 해제문법임.
애니 = "안녕";
애니 = 123;

let 언노운: unknown; // any보다 안전하다.
언노운 = 123;
언노운 = "안녕";

let 변수1: string = 애니;
let 변수2: string = 언노운;

let 이름2: unknown;
이름2 - 1; // (중요) 타입 엄격하게 지켜야한다.

let 나이2: string | number; // 나이2는 string 또는 number라는 새로운 타입.
나이2 - 1; // 안돼
// Narrowing/ Assertion 배워서 엄격하게 코드짜면 된다.

//
let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: { score: (number | boolean)[]; teacher: string; friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

//========================================================================
function 함수(x: number): number {
  // parameter와 return값 타입 지정가능.
  return x * 2;
}
function 함수2(x: number): void {
  // return값이 없도록 해주세요 void
  1 + 1;
}

함수2(); // 파라미터에 타입 지정해줬으면 반드시 인자 넣어줘야된다.

// 파라미터를 옵션으로 두고싶으면 ? 넣어주면 된다. 객체에서도 마찬가지
// 변수? :number은 사실 변수 : number | undefined랑 같다.
function 함수3(x?: number): void {
  // return값이 없도록 해주세요 void
  1 + 1;
}

함수3();

// Narrowing : 타입이 애매한 변수 다룰때 Type narrowing해줘야한다.
// 대표적인 Narrowing 방법은 typeof 연산자
function 함수4(x: number | string): void {
  console.log(x + 3); // x의 type이 number가 아니라 에러가 난다.
}
function 함수5(x: number | string): void {
  if (typeof x === "number") console.log(x + 3); // typeof 연산자로 narrowing 해줬다.
  else {
    console.log(x + 3);
  }
}

// narrowing 할때 if문 썼으면 else 까지 마무리해줘야한다.
function myfunc(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
  }
}

// Narrowing 으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모

// Narrowing 이 아니면 assertion 문법(타입 덮어쓰기)도 있다.
// 근데 assertion 막 쓰면 안된다.
function myfunc2(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}

// assertion 쓸 때 (거의, 굳이 쓰지마라)
// 1. Narrowing 할 때 쓴다.
let 이름3: string = "kim";
이름 as number; // 이런식으로 타입을 a에서 b로 변경하는거 X
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다. ( 굳이 쓰지마라 )

function 만들함수(obj: { subject: string | string[] }): string {
  if (typeof obj.subject === "string") {
    return obj.subject;
  } else if (Array.isArray(obj.subject)) {
    return obj.subject[obj.subject.length - 1];
  } else {
    return "없쪄";
  }
}

//================================================================
// type alias
type AnimalType = string | number | undefined; // 대문자로 시작.
let 동물: AnimalType = 123;

type PlantType = { name: string; age: number };
let 식물: PlantType = { name: "kim", age: 20 };

// readonly , 에디터 , 터미널에서만 에러가 존재. 실제 js에는 에러가 없다
type Girlfriend = { readonly name?: string };
const 여친: Girlfriend = { name: "엠버" };
여친.name = "유라";

// type 변수 합치기
// union 타입으로 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

// &연산자로 object 타입 합치기 (= object를 extend한다)
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY;
let position: NewType = { x: 10, y: 20 };

// type 변수는 재정의 불가능하다
type PositionX = number;

type Str = { x: string };
type Num = { x: number };
type New = Str & Num;
let param: New = { x:  };

type Something = { color?: string, size: number, readonly position: number[] }

type Profile = { name: string, phone: number, email: string }

type Adult = { adult: boolean }
type NewUser = Profile & Adult

//======================================================
// Literal types
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 나온다.
let 이름4: 123;

// 함수에도 사용가능
function 함수6(a: 'hello'): 1 | 0 {
  return 1
}
함수6('hello')

function 가위바위보(a: '가위'| '바위' | '보') :('가위'| '바위' | '보')[] {
  return ['가위'] 
}

// Literal type 은 const 변수의 업글버전
// 접니다라는 변수는 대머리, 솔로 두가지의 값을 가질수있다 
// 변수라는 변수는 kim만 값을 가진다.
let 접니다: '대머리' | '솔로'
const 변수 = 'kim'

// Literal type의 문제점
var 자료 = {
  name : 'kim'
} 
// a라는 타입이 'kim'
function 내함수(a:'kim') {
  
}
내함수('kim')
내함수(자료.name) // 자료.name은 타입이 string

// 솔루션 1. object 타입지정하기.
var 자료2 : {name : 'kim'} = {
  name : 'kim'
} 
내함수(자료2.name)


// 솔루션2. as 타입
내함수(자료.name as 'kim')


// 솔루션3. as const -> object를 잠그고 싶으면 사용해봐.
// 효과 1. object value값을 그대로 타입으로 지정해줌. 2. object 속성들에 모두 readonly값 붙여줌
var 자료3 = {
  name : 'kim'
} as const
내함수(자료3.name)
//=========================================================================================

// type alias 함수 type 저장해서 쓰는법
type 함수타입 = (a: string) => number; // string 타입의 인자를 받고 number 타입값을 return 함.

// 함수 표현식으로 해줘야함. 우리가 해왔던건 함수 선언식
let 함수7: 함수타입 = function (a) {
  return 10
}

type 회원정보 = {
  name: string,
  age: number,
  PlusOne: (x: number) => number,
  changeName : () => void
}

let 회원정보 = {
  name: 'kim',
  age: 30,
  PlusOne(x) {
    return x+1
  },
  changeName: () => {
    console.log('안녕')
  }
}

회원정보.PlusOne(1)
회원정보.changeName()

// type CutZeroType = (x :string) => string 
// type RemoveDashType = (x :string) => number 

// let cutZero : CutZeroType = (a) => {
//   if(a[0] === '0') return a.slice(1)
// }

// let removeDash : RemoveDashType= (a) => {
//   if(a.includes('-')) return parseInt(a.replaceAll('-',''))
// }
type CutType = (x :string) => string
type removeType = (a : string) => number
let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
} 



function 만들함수2(x:string, callback1:CutType, callback2:removeType) {
  // console.log(callback2(callback1(x)))
  let result1 = callback1(x);
  let result2 = callback2(result1)
  console.log(result2)
}
