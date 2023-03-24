// d.ts 파일 이용하기
// 타입정의 보관용 파일
export type Age5 = number;
export interface Person5 {
  name: string;
}

// 그리고 레퍼런스용으로 d.ts파일을 사용할 수 있다. tsconfig.json 파일에서 "declaration" :true해주면
// 그 파일에서 사용한 type들 모두 정리해서 d.ts파일 만들어줌

// d.ts 파일을 로컬 모듈임. 그래서 export 해줘야된다.
// 근데 d.ts파일을 글로벌 모듈로 만들고싶다면 tsconfig.json 파일에서 typeRoots : [./types] 해주고
// types폴더에 d.ts파일 넣어주면됨 types폴더에있는 타입들은 모두 글로벌하게 이용가능하다. 위험.
// 외부 라이브러리 쓸때 타입정의 안되어었다면
// Definitely Typed github 레포지토리에서 d.ts파일 찾아서 다운받든지
// ts 공홈에서 type search해서 라이브러리명 입력하구 설치. -> node_modules 생김 거기에 @types 있음
// 근데 typeRoots 임의로 설정했다면 거기에 배열안에 추가하든가, 아니면 typeRoots 다 지우든가

//===========================================================================
