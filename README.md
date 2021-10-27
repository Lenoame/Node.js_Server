# Node.js_Server
Node.js로 만드는 백엔드 실습!

## '서버'가 뭔지 세계 최고로 쉽게 설명해드림

1. What is SERVER?
- 클라이언트에게 네트워크를 통해 정보나 서비스를 전달하는 컴퓨터
- 클라이언트 요청에 의해 서비스를 제공함

서버는 고깃집 알바생과 비슷함

Server == 서빙하는 사람

서버 : 요청을 받으면 요청한 내용 보내주는 프로그램

HTTP 요청

4개 방식이 있음

1. 읽기 GET - 나 이런 페이지 읽고 싶어요! 뭔가 읽고 싶을 때
2. 쓰기 POST - 새로운 글을 생성해주세요! 댓글 작성! 뭔가 생성할 때
3. 수정 PUT - 뭔가 수정할 때
4. 삭제 DELETE - 뭔가 삭제할 때

사용자는 GET/POST/PUT/DELETE 요청 가능

ex. 어떤 사람이 /list라는 페이지를 GET요청하면...

거기 해당하는 list.html 파일을 보내줌

## Node.js의 정체를 알아보자
Node.js = JavaScript 런타임

자바스크립트는 HTML에 종속된 언어. HTML 조작을 위해 만들어진 언어

JavaScript

- HTML 조작과 변경
- 웹페이지를 다이나믹하게 바꿔주기 가능
- 자바스크립트 해석은 브라우저가 담당함

HTML : 웹페이지에 글쓰고 그림넣는 언어

- 특징 : 안움직임, 글넣고 그림 넣는게 끝

자바스크립트의 해석엔진

크롬은 V8

IE = Chakra

FireFox = SpiderMonkey

크롬의 V8 해석엔진을 따로 떼고 살을 붙여서 Node.js로 만듬

Node.js는 브라우저 내에서 말고도 다른 환경에서도 JavaScript 실행할 수 있게 도와줌

쉽게말하면 그냥 자바스크립트 실행창, 실행 환경 = 런타임

Node.js만 있으면 터미널에서도 자바스크립트를 사용할 수 있음

Node.js 덕분에 JavaScript를 프로그래밍 언어처럼 사용하기 시작함

Node.js로 서버를 만드는 이유

- Non-blocking I/O 이게 좋아서 서버로 만듬

## Node.js의 Non-blocking이라는 장점을 알아보자
Node.js 특징

- Event-driven, Non-blocking I/O

영화예매 웹서버

일반 프로그래밍 언어로 개발시

- A 1장 예매
- B 1장 예매
- 단체 - 200석 예매 → 서버는 200석 예매 요청을 처리할 동안에 멈춘다
- 단점 : 중간에 버거운 요청을 만나면 서버가 잠깐 중지되고 다른 요청을 받을 수 없음

Node.js로 개발시

- 일단 요청을 다 받음
- 처리속도가 빠른 것부터 처리함
- 어려운 작업은 나중에 처리함
- 이러한 특성이 Non-blocking I/O

Node.js의 강점

- SNS, 채팅서비스 → 특징 : 요청이 많음
- 일반서버로 구현한 서비스는 요청이 많거나 오래걸리는 요청이 있으면 멈추거나 대기시간 발생
- Node.js의 경우 요청이 많거나 오래걸리는 요청이 있어도 멈추거나 요청 대기시간이 없다
- Non-blocking 덕분에 채팅/SNS에 자주 사용
- 코드가 매우 짧고 쉬워서 빠른 개발가능
- Pivoting이 잘된다
- 주로 웹서비스 만들 때 쓰임
- 단점은 이미지 처리 서버 등이 필요하면 그다지 좋지는 않음 → 좋은 라이브러리가 없다

서버 스케일링 혹은 멀티쓰레딩을 하면 일반서버도 처리 능력 향상

이것은 Node.js도 가능하다


## Node.js와 Express 라이브러리 설치하기

1. Setting up
- Node.js 설치 (10버전 이상)
- node -v 입력하면 설치된 버전이 나옴 (설치확인 끝!)
- node 입력하면 node 실행 가능 → 자바스크립트 사용가능
- VS code 에디터 설치

Node.js 실행해보려면 검색 - 명령프롬프트 or Powershell, 맥은 터미널 검색

작업폴더를 오픈하고 코딩시작 (File - Open Folder)

생코딩이 아니라 express 라는 라이브러리를 써서 서버를 만들거임

라이브러리 : 코드를 쉽게 짜기 위해 빌려쓰는 코드 모음집

express 라이브러리 설치하기

1. 터미널 열기 (New Terminal)
2. npm init 이벽해서 셋팅하기 → npm은 라이브러리 설치를 도와주는 도구
3. 어떤 라이브러리 설치했는지 기록하면 좋을듯? package.json에 기록함  entry point: (index.js) server.js 엔트리 포인트만 내가 원하는 파일명으로 설정
4. 터미널에 npm install express 입력하기
5. package.json에 기록이 됩니다 (설치할 때마다)

node_modules → 라이브러리에 필요한 자료들 담는 공간

npm install설치시 '권한이 없어요' 에러가 날 수 있음 → 대부분은 구글검색 해결 가능 → yarn 검색 후 설치 (명령어 yarn add express)

## 두근두근 내 첫 서버에서 GET 요청을요청리해보자

1. Basic GET request

터미널 오픈시에도 폴더명 잘 뜨는지 확인

서버를 띄우기 위한 기본 셋팅 (express 라이브러리)

listen(서버띄울 포트번호, 띄운 후 실행할 코드)

8080 port에 서버 띄워주세요

Port = 컴퓨터에는 외부와 통신하기 위한 구멍이 있음. #8080포트로 들어오는 사람에게 이 서버를 보여주세요~

서버 켜는 법 node server.js
서버 끄는 법 ctrl + c
키보드 위 방향키 누르면 저번에 쳤던 명령어를 복사할 수 있음

localhost:8080 → 8080포트로 들어가는 법

요청을 처리하는 기계 제작하기 (서버)

/beauty/home으로 방문하면 뷰티 상품들을 보여줌 → GET요청

/pet/home으로 방문하면 펫 상품을 보여줌 →GET요청

URL에 경로를 적으면 서버에 GET요청을 하는 것임

누군가가 /pet 으로 방문을 하면.. pet관련된 안내문을 띄워주자

## 서버에서 HTML 파일전송해보기 & Nodemon으로 자동화
고객 (Client) : 주소창에 URL을 입력해서 서버에 GET요청을 할 수 있음

서버 : 누군가 /pet으로 들어오면 XX를 보내주세요~ 라고 코드를 짰다.

```jsx
//GET 요청
app.get('/beauty', function(req, res){
	res.send('뷰티용품 쇼핑할 수 있는 페이지입니다.');
});

```

서버 재실행이 귀찮음 → 자동화시키기

node. server.js

```
노드몬 라이브러리 설치 -g = global = 전역 설치
npm install -g nodemon

yarn 으로 설치 시
yarn add global nodemon

저장하면 서버를 재실행함
nodemon server.js
```

powershell 보안오류 시

1. 파워쉘 검색
2. 관리자 권한으로 실행
3. executionpolicy 입력
4. set-executionpoliy unrestricted 입력
5. y 입력 [yes]

```jsx
// 어쩌구로 접속시 HTML 파일을 보내보자

// /으로 접속하면 index.html을 보내주기
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
});

```

/ 하나만 사용하면 홈페이지임

```html
// index.html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTR-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta htt[-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
</head>
<body>
	<h4>안녕하세요</h4>
	<p>홈입니다</p>
</body>
</html>
```

## Bootstrap을 이용한 빠른 UI 개발
HTML/CSS 라이브러리를 이용해서 쉽게 만들자

구글에 Bootstrap 검색 후 방문

Bootstrap v5는 IE지원 X

Bootstrap v4는 IE11+

Bootstrap v3은 IE9+

Bootstrap 은 HTML/CSS 라이브러리이다.

HTML 생코딩 없이 UI 개발 끝

트위터 개발자들이 만듬

원하는 UI 검색 후 예제코드 복붙하면 UI 개발 끝

Bootstrap 설치는 Get started들어가서 Starter template예제 index.html에 복붙

저장하고 새로고침 하면 Nodemon이 자동으로 서버를 재실행해줌

사이트 대문을 만들고 싶으면 Jumbotron 검색

## 폼에 입력한 데이터를 서버에 전송하는 법 (POST 요청)

자바스크립트 문법

.get()에 들어가는 파라미터 중 하나가(function(){}) = 콜백함수

함수 안에 함수 (function(){}) = 콜백함수 → 순차적으로 실행하고 싶을 때 씀

자바스크립트에서는 콜백함수를 자주 사용한다

콜백함수에는 2개에 파라미터가 들어갈 수 있음

.get('경로', function(요청내용, 응답할 방법){})

.send(보낼 단어)

.sendFile(보낼 파일)

ES6 신문법 → .get('경로', (req, res) ⇒ {}) == .get('경로', function(req, res){})

```
body-parser 설치
npm install body-parser

yarn add body-parser
```

```jsx
const express = require('ex[ress');
const app = express():
const bodyParser = require
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8080, funtion(){
	console.log('listening on 8080')
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
});

// 누가 /write로 접속하면 write.html 보내주세요~
app.get('/write', function(req, res){
	res.sendFile(__dirname + '/write.html')
});

// 어떤 사람이 /add 경로로 POST 요청을 하면... ?을 해주세요
// POST요청 처리 기계를 만들려면 app.post('경로', 콜백함수)
app.post('/add', function(req, res){
	res.send('전송완료');
	console.log(res.body.title);
// 이렇게 코드를 짜면 input에 적은 정보가 서버로 전달된다 -> 터미널 확인

});
// input에 저장한 정보는 어디있을까? 파라미터 req에 있음. 근데 쉽게 꺼내쓰려면 라이브러리가 필요함 -> body-parser

// 3. res.body라고 하면 요청했던 form에 적힌 데이터 수신가능
app.post('/add', function(req, res){
	res.send("전송완료");
	console.log(res.body);
	console.log(res.body.title);
	console.log(res.body.date);
});
// form에서 보낸 자료 (= res.body)

```