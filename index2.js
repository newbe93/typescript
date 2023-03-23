let 이름 = "kim";
let 나이 = 50;
let 결혼했니 = true;
let 널 = null;
let 언디파인 = undefined;
let 회원들 = ["kim", "park"];
let 나이들 = [12, 20];
let 김씨 = { name: "kim", age: 20 };
// 온갖 곳에 다 타입지정할 필요 없다. 타입지정 원래 자동으로 됨
let 김 = "kim";
let 나 = { 이름: "shin", 나이: 31, 출생지역: "서울" };
let 제일좋아하는가수 = { 이름: "태연", 곡: "날개" };
let project = { member: ["kim", "park"], days: 30, started: true };
let 회원 = 123; // Union type
let people = [1, "2", 3];
let object = { a: 123 };
let 애니; // 타입실드 해제문법임.
애니 = "안녕";
애니 = 123;
let 언노운; // any보다 안전하다.
언노운 = 123;
언노운 = "안녕";
let 변수1 = 애니;
let 변수2 = 언노운;
let 이름2;
이름2 - 1; // (중요) 타입 엄격하게 지켜야한다.
let 나이2; // 나이2는 string 또는 number라는 새로운 타입.
나이2 - 1; // 안돼
// Narrowing/ Assertion 배워서 엄격하게 코드짜면 된다.
//
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
//========================================================================
function 함수(x) {
    // parameter와 return값 타입 지정가능.
    return x * 2;
}
function 함수2(x) {
    // return값이 없도록 해주세요 void
    1 + 1;
}
함수2(); // 파라미터에 타입 지정해줬으면 반드시 인자 넣어줘야된다.
// 파라미터를 옵션으로 두고싶으면 ? 넣어주면 된다. 객체에서도 마찬가지
// 변수? :number은 사실 변수 : number | undefined랑 같다.
function 함수3(x) {
    // return값이 없도록 해주세요 void
    1 + 1;
}
함수3();
// Narrowing : 타입이 애매한 변수 다룰때 Type narrowing해줘야한다.
// 대표적인 Narrowing 방법은 typeof 연산자
function 함수4(x) {
    console.log(x + 3); // x의 type이 number가 아니라 에러가 난다.
}
function 함수5(x) {
    if (typeof x === "number")
        console.log(x + 3); // typeof 연산자로 narrowing 해줬다.
    else {
        console.log(x + 3);
    }
}
// narrowing 할때 if문 썼으면 else 까지 마무리해줘야한다.
function myfunc(x) {
    let array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
    }
}
// Narrowing 으로 판정해주는 문법들
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
// Narrowing 이 아니면 assertion 문법(타입 덮어쓰기)도 있다.
// 근데 assertion 막 쓰면 안된다.
function myfunc2(x) {
    let array = [];
    array[0] = x;
}
// assertion 쓸 때 (거의, 굳이 쓰지마라)
// 1. Narrowing 할 때 쓴다.
let 이름3 = "kim";
이름; // 이런식으로 타입을 a에서 b로 변경하는거 X
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓴다. ( 굳이 쓰지마라 )
function 만들함수(obj) {
    if (typeof obj.subject === "string") {
        return obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else {
        return "없쪄";
    }
}
let 동물 = 123;
let 식물 = { name: "kim", age: 20 };
const 여친 = { name: "엠버" };
여친.name = "유라";
let position = { x: 10, y: 20 };
let param = { x:  };
//======================================================
// Literal types
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성 나온다.
let 이름4;
// 함수에도 사용가능
function 함수6(a) {
    return 1;
}
함수6('hello');
function 가위바위보(a) {
    return ['가위'];
}
// Literal type 은 const 변수의 업글버전
// 접니다라는 변수는 대머리, 솔로 두가지의 값을 가질수있다 
// 변수라는 변수는 kim만 값을 가진다.
let 접니다;
const 변수 = 'kim';
// Literal type의 문제점
var 자료 = {
    name: 'kim'
};
// a라는 타입이 'kim'
function 내함수(a) {
}
내함수('kim');
내함수(자료.name); // 자료.name은 타입이 string
// 솔루션 1. object 타입지정하기.
var 자료2 = {
    name: 'kim'
};
내함수(자료2.name);
// 솔루션2. as 타입
내함수(자료.name);
// 솔루션3. as const -> object를 잠그고 싶으면 사용해봐.
// 효과 1. object value값을 그대로 타입으로 지정해줌. 2. object 속성들에 모두 readonly값 붙여줌
var 자료3 = {
    name: 'kim'
};
내함수(자료3.name);
// 함수 표현식으로 해줘야함. 우리가 해왔던건 함수 선언식
let 함수7 = function (a) {
    return 10;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    PlusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
회원정보.PlusOne(1);
회원정보.changeName();
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수2(x, callback1, callback2) {
    // console.log(callback2(callback1(x)))
    let result1 = callback1(x);
    let result2 = callback2(result1);
    console.log(result2);
}
