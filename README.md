



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

## REST API

서버 만들 때 REST 하게 API를 짜는게 좋음

API는 무엇인가?

Application Programming Interface

API 규약에 따라 데이터 전달

프로그램 간에 어떤 식으로 통신할 수 있는지 통신규약

웹개발시에는

= 웹서버와 고객간의 소통방법

= 어떻게 해야 서버랑 통신을 할 수 있을까

```jsx
// 이것들이 전부 API이다
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res){
	res.sendFile(__dirname + '/write.html')
});

app.post('/add', function(req, res){
	res.send('전송완료');
	console.log(res.body.title);
});
```

어떤식으로 만들어야 좋은 API일까?

REST API

API에 일관성도 없고 막만들어놓았기 때문에

Roy Fielding

HTTP 요청 시스템 (GET, POST, PUT, DELETE)

REST 원칙에 의해서 쓰면 인터넷 세상이 평화로워진다 (라고 졸업논문을 썼다

REST (Representational State Transfer)

REST 원칙 6개

1. Uniform Interface ** 가장 중요!
하나의 자료는 하나의 URL로
URL 하나를 알면 둘을 알 수 있어야함
요청과 응답은 정보가 충분히 들어있어야 함
2. Client-Server 역할 구분
브라우저는 요청만 할 뿐
서버는 응답만 할 뿐
3. Stateless
요청1과 요청2는 의존성이 없어야함
4. Cacheable
서버에서 보내주는 정보들은 캐싱이 가능해야함 (실은 브라우저가 알아서 해줌)
캐싱을 위한 버전 같은 것도 관리 잘해야함
5. Layered System
6. Code on Demand

```
좋은 REST API 예시
www.example.com/products/66432
instagram.com/explore/tags/kpop/ -kpop 태그 검색
facebook.com/natgeo/photos/

```

좋은 REST API

이름짓기 원칙

- URL을 명사로 작성 추천
- 하위문서를 나타낼 땐 / 사용
- 파일확장자(.html) 쓰지말기
- 띄어쓰기는 대시(-) 이용
- 자료 하나당 하나의 URL

## Database에 자료 저장하는 법
1. MongoDB Atlas 메인 대시보드에서 Collections 라는 버튼을 누릅니다.
2. 이번엔 Add my own data 버튼을 누릅니다. (혹은 이미 뭐가 있다면 create database)
3. 여러분이 database 이름, collection 이름을 예쁘게 하나씩 정해준 다음 저장을 눌러줍니다.

서버 띄울 때는 터미널 하나만 사용하기

mongodb는 Object 자료형으로 저장되고 schema를 신경 안써도 된다.

_id : ObjectId() → 자료저장시 _id 꼭 적어야한다. 안적으면 하나 강제로 부여해줌


이 때, 'post' 라는 이름을 가진 collection에 두 개 데이터를 저장하기

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

## HTML에 DB데이터 꽂아넣는 법(EJS)
EJS설치
```
터미널에서 ejs 설치
npm install ejs
```
list.html == list.ejs 같다

.ejs로 하면 ejs 문법을 이용해 서버데이터 삽입이 가능하다

에러가 뜨는것은 좋은거임

에러는 구글에 검색하면 대부분 해결책이 나옴

.ejs 파일들은 view폴더 내에 있어야함

1. views 폴더 생성
2. 여기 안에 .ejs파일 다 넣기

node에서 ejs파일 쓸 때 기본법칙들이다.


## DB의 종류와 특징
1. 관계형(Relational) 데이터베이스

정의 : 엑셀처럼 행과 열로 데이터를 저장할 수 있는 데이터베이스

특징

- 거의 모든 곳에 사용할 수 있어서 범용적임
- 구조화된 데이터를 저장하기 가장 좋다
- 보통 SQL 이라는 언어를 이용해 데이터를 출력 입력한다
- '이 열엔 숫자가 들어옵니다' 라고 스키마를 미리 정의하기 때문에 관리가 쉽다
- 구조화된 데이터 덕분에 원하는 데이터 뽑기도 쉽다
- 트랜젝션 롤백 이라는 기능을 이용해 데이터의 무결성을 보존하기 쉽기 때문에 금융, 거래 서비스에 필수적이다

예를 들어 선생님마다 가르치는 과목들을 

선생님번호 → 이름 → 과목

0 → 손흥민 → 수학

1 → 박지성 → 과학

2 → 안정환 → 사회

이런 테이블로 저장이 가능함

하지만 과목 항목이 많아지면?

선생님번호 → 이름 → 과목

0 → 손흥민 → 수학, 영어

1 → 박지성 → 과학

2 → 안정환 → 사회

이렇게 사용하면 나중에 데이터를 꺼내쓸 때 문제가 생김

손흥민 선생님 행을 하나 더 만들면 번호 중복이 생김

이것이 테이블 형 데이터베이스의 단점. 데이터가 3차원으로 늘어나게 되면 2차원의 테이블 내에서 제대로 표현할 수가 없게 된다.

그래서 테이블을 하나 더 만든 후에 테이블간의 관계를 지어준다.

선생님번호 → 이름 

0 → 손흥민 

1 → 박지성 

2 → 안정환 

과목번호 → 이름 → 선생님번호

0 → 수학 → 0 (손흥민)

1 → 영어 → 0 (손흥민)

2 → 과학 → 1 (박지성)

선생님을 관리하는 테이블과 과목 관리하는 테이블을 따로 만듬. 그리고 과목에 선생님 번호를 적어서 어떤 선생님이 가르치는지 관계를 지어줌 → 관계형 데이터베이스의 특징이자 구축방법

관계의 종류 → one to one, one to many, many to many 관계가 있음

1. NoSQL 데이터베이스

정의 : 용어 자체는 약간 범용적. SQL문 없이도 사용할 수 있는 데이터베이스. 대부분 테이블에 국한되지 않고 자유로운 형식으로 데이터를 쉽게 분산저장할 수 있음.

종류

- Key-value 모델 : Object, JSON 자료형 형식으로 데이터를 쉽게쉽게 저장, 출력이 가능하다. 가장 심플함.
- Document 모델 : 테이블 대신 Collection이라는 문서 기반으로 데이터를 분류하고 저장함. 테이블보다는 훨씬 유연함. → MongoDB도 Key-value, Document 모델 저장방식을 차용하고 있다
- Graph 모델 : 데이터를 노드의 형태로 저장하고 노드간의 흐름 또는 관계를 저장할 수 있음.
- Wide-column 모델 : 한 행마다 각각 다른 수, 다른 종류의 열을 가질 수 있음 → 스키마가 자유로움

특징

1. Scaling이 쉽다
- 찰나의 순간 에 대량의 데이터를 저장해야한다면 기존 올드한 관계형 데이터베이스는 확장이 매우 어려움. 보통 scale up 이라는 방법으로 서버의 성능을 키워야 한다.
- 대부분의 NoSQL 데이터베이스는 scale out 이라는 방법으로 데이터를 분산저장하는 것을 기본적으로 지원한다. → 걱정할 필요없이 데이터 입출력에만 신경써도 된다.
- 대량의 데이터를 빠르게 입출력해야한다면 NoSQL이 좋음.
- ps. 요즘은 관계형 데이터베이스도 분산저장 대충 잘한다.

1. 대부분 다루기가 쉽다
- SQL 이라는 언어를 새로 배우지 않아도 데이터를 쉽게 입출력할 수 있다
- 서버에서 쓰던 프로그래밍 언어로 DB를 다룰 수 있다는 장점이 있음.

1. 대부분 스키마 정의 없이도 쉽게 쓸 수 있다. (이 열의 데이터는 정수입니다 라고 표현 안해도 된다)
- 장점이자 단점일 수 있음. 그래서 MongoDB에선 스키마를 미리 정의하기 위한 Mongoose 같은 라이브러리를 추가해서 사용하기도 한다

1. NoSQL 데이터베이스는 기본적으로 SQL 에서의 JOIN 연산을 적용하는게 기본적으로 어렵다
- 서버 단에서 JOIN 연산을 수비게 처리해주는 라이브러리를 이용한다.

MongoDB 에서도 Relational Database처럼 관계를 표현해 저장하기도 한다

예로 게시물에서 댓글을 저장해야 할 때.

댓글을 그냥 저장할 수도 있지만 몇 억개가 달리면 문제가 생긴다

참고로 MongoDB document 하나의 최대 용량이 16MB 이다

댓글용 collection을 하나 더 만들어서 해결하자

두 데이터베이스가 공존하는 이유는 각각의 명확한 장점 때문이다

정규화된 데이터와 안정성이 필요하다면 관계형 데이터베이스를 사용 → 금융서비스, 은행전산시스템

일초에 수백만개의 데이터 입출력 요청이 들어오는 SNS 서비스를 만들 때나 뭔가 서비스의 변경사항이 잦아서 쉽고 유연하게 데이터를 저장하고 싶으면 NoSQL을 사용하자 → 실제로 Facebook은 HBase 데이터베이스를 이용해 분산저장한다

블록체인

- 거래장부 저장형식
- ex. A가 B 에게 1코인을 지급했다. 물론 정보는 암호화되어있다
- 거래내역의 투명성, 익명성, 공정성을 보장해줌
- 지금은 처리시간, 스케일링, 수수료 문제 등 특유의 비효율성 때문에 실용화되진 못하고 있음


## 게시물마다 번호를 달아 저장하려면
- auto increment -> DB에 항목 추가할 때마다 자동으로 1증가시켜서 저장하는 것
- count를 사용해서 사면 안된다. 나중에 데이터를 수정할 때 혼선이 생길 수 있음
- 저장되는 시점에 따 혼선유발가능 : 애초에 고유한 id를 부여하는 것이 좋음
- 영구적으로 번호를 지정해서 저장하는 것이 좋음
- 발행된 총 게시물 갯수를 기록하는 저장공간

_id를 부여하는 이유 : 구분할 수 있게 만들기 위해서. 직접해도 OK

새로운 컬렉션 생성하기 (counter) → 발행된 총 게시물 갯수를 기록하는 저장공간

_id:

totalPost : 0 int형으로 바꿔준다

name : '게시물갯수' string

지금까지 발행한 총 게시물 갯수를 저장하는 파일

var로 만든 변수는 재선언 O 재할당 O 생존범위는 function 내부

let 재선언 X 재할당 O 생존범위는 {} 내부

const로 만든 변수는 재선언 X 재할당 X {} 내부

변수 색이 흐릿한 이유 : 선언하고 안쓰면 흐릿해짐

## DB Update 함수와 inc 연산자

콜백함수는 순차적 실행을 위해서 사용합니다

.updateOne(수정할 데이터, 이렇게 수정해주세요[operator 사용])

 update operator 연산자

- $set(변경)
- $inc(증가)
- $min(기존값보다 적을 때만 변경)
- $rename(key값 이름변경)
- ...

{$set : {totalPost : 바꿀 값}}

{$inc : {totalPost : 기존 값에 더해줄 값}} increment의 약자

한 줄씩 적어가면서 해석하는게 남의 코드 해석하는 가장 좋은 방법이다

## AJAX로 삭제요청하기
서버에 해당 글 삭제 요청을 함 (DELETE 요청)

(HTML에서는 불가능) → HTML에서는 GET/POST 요청만 할 수 있음

DELETE 요청하는 법

1. method-override 라이브러리 이용
- Node에서 쓸 수 있는
- (form에서 DELETE 요청 가능해짐)
1. JavaScript AJAX를 이용
- 서버 만들 때 꼭 필요하다

DELETE 요청하기 전 더러운 HTML 예쁘게 꾸미기 (list group 검색 후 복붙)

AJAX는 새로고침 없이 서버에 요청하는 것을 도와주는 JS 문법

$.ajax({

method : 'DELETE',

url : '요청할경로',

data : '요청과 함께 보낼 데이터'
})

요청보낼 때 삭제할 게시물 번호를 함께 전송

db.collection('post').deleteOne({어떤 항목을 삭제할지}, function() {
delete 요청을 실행했을 때 실행할 구문;
})

삭제되어야 하는데 삭제가 안되었군

(얘는 따옴표 없는 숫자)

우린 숫자를 요청했는데 왜 문자가 요청되는가. req.body를 숫자를 바꿔주기

x 번 버튼을 누르면  x번 게시물이 삭제되어야함

1. HTML 버튼마다 번호달기
2. 클릭한 버튼의 id를 파악하기
3. 그걸 DELETE 요청시 함께 넣기

data-id=" " → HTML 안에다가 몰래 정보들을 숨겨서 전달 가능하다

$('.delete').click(function(e){
    var postNum = e.target.dataset.id;

[e.target](http://e.target) 지금 누른 요소

[dataset.id](http://dataset.id) 지금 누른 요소의 아이디를 가져와주세요

AJAX는 새로고침 없이 서버에게 요청하는 방법이다 (요청은 잘 처리된다)

응답코드

서버에서 안내메세지를 띄워주는 것

2XX를 보내면 요청성공이라는 뜻

4XX를 보내면 고객 잘못으로 요청실패라는 뜻

5XX를 보내면 서버 문제로 요청실패라는 뜻

[e.target](http://e.target) = 지금 클릭한 것

this = 지금 이벤트가 동작하는 곳

.parent() = ~의 부모 태그를 찾아주세요

.fadeOut() = 서서히 사라지게 해주세요

.done(function()) = 성공시 실행

.fail(function()) = 실패시 실행

textStatus 인자 fail함수에 2번째 파라미터를 실행해보면 응답 코드가 나옴

errorThrown 에러메세지 출력

## 상세페이지 만들어보기
Q. detail.ejs는 언제 보여줘야하나요?

// /detail로 접속하면 detail.ejs 보여주기
// /detail2로 접속하며 detail2.ejs 보여주기

url의 뒤에 숫자가 무엇일까요? → 글번호임

Parameter로 요청 가능한 URL 백개 만들기

app.get('/detail/:id',)

콜론 뒤에 아무 문자나 입력해서 GET요청을 하면/detail로 보내주세요

Parameter로 요청가능한 URL 백 개 만들기

findOne({_id : res.parmas.id} 파라미터 중 : id라는 뜻

왜 DB에서 찾은 게시물이 없는가?

보통 아무것도 지정하지 않으면 요청은 string으로 처리됨

앞에 parseInt함수 붙이기

## HTML 조립식 개발하기
mt-4 = margin top을 4만큼 달라는 뜻

pt-4 = padding top을 4만큼 달라는 뜻

mb = margin bottom

폴더를 만들어서 css파일 만들기 - public/main.css 생성

CSS파일은 static files 라고 함 → 정적인 파일
href 태그에 무언가를 적어주면 링크를 달아줄 수 있음

문제 : nav 수정할 ejs파일이 너무 많음

여러 페이지에 걸쳐 있는 똑같은 태그를 바꾸려면 번거로움

nav태그 조립식 첨부

- views/nav.html 생성
- <nav>전부 복붙
- index.html에 첨부
- 이렇게 하면 파일 하나만 추가하면 모두 변경시킬 수 있다
- ejs파일만 가능 html에서는 jQuery를 사용해야 함
- detail.ejs에 첨부

## 글 수정 기능
edit.ejs 만들자

- write페이지와 유사함
- 입력했던 제목, 날짜가 이미 채워짐
- 전송누르면 Edit기능을 함 (솔직히 혼자 가능)

가장 쉬운 방법 → 일단 보이는 걸 만들자 → 다음 기능 만들기

게시글마다 각각 다른 edit.ejs 내용이 필요함 → /edit/:id 로 라우팅하기

이상한 경로로 접속하면 에러처리(알아서)

<input value= > input 값을 미리 채워놓을 수 있음

수정요청시 사용한다던 PUT 요청을 써보자 (HTML5로는 못함)

<form> 안에는 GET or POST밖에 안된다

```
npm install method-override
HTML에서 PUT/DELETE 요청하려면 설치하기
```

한글로 코드를 써 놓고 코드를 짜면 많이 도움이 된다.

updateOne(어떤 게시물 수정할건지, 수정값, 콜백함수)

$set 업데이트 해주세요. 없으면 추가해주세요 라는 내용의 오퍼레이터

폼 전송시 _id : ?? 정보도 함께 보내기

1. 몰래 input을 만들고 value에 정보를 넣음
2. name 쓰기

폼에서 전송한 제목, 날짜로 db.collection('post')에서 게시물을 찾아서 업데이트

읽기 쓰기 수정 삭제 CRUD 만 알면 기본적인 것을 다 구현할 수 있다

## 세션, JWT, OAuth 등 회원인증 방법론 쉽게 이해하기
회원인증방법

1. Session-based

쿠키 : 브라우저에 저장할 수 있는 긴 문자열

세션 아이디가 적힌 쿠키

로그인 후 활동 → 마이페이지 보여주세요

로그인 한지 판단하려면?

쿠키 데이터가 서버에게 자동으로 몰래 보내짐

쿠키 안에는 세션 아이디가 저장되있음

세션 데이터 → 여러사람들이 로그인 했다는 데이터가 담겨 있음

세션 데이터에서 아이디를 찾으면 마이페이지.html을 보내준다

세션 방식은 로그인 했다는 정보를 서버 메모리에 모두 저장함 → 장점이자 단점

1. Token-based(JWT)(JSON Web Token)

로그인을 하면 서버는 브라우저에 웹 토큰을 발행해줌 → 긴 문자열이 담겨있음

서버는 로그인 했는지 판단해야함. 

요청과 웹 토큰을 헤더에 함께 전송하기 → 웹토큰을 검사하고 유효한 토큰인지 확인되면 html파일을 보내준다

장점 : 유저들 로그인 상태를 저장할 수 없다

웹토큰 → 유통기한 있는 열쇠

REST원칙 - stateless해야한다

좀 더 RESTful한 서버를 만들 수 있음

1. Open Authentication (OAuth)

ex. 페이스북이나 구글에서 프로필 정보를 가져옴

페이스북 또는 구글 아이디로 로그인시 이 사람의 앱을 승인하시겠습니까? 동의화면이 뜸

email, name, gender 등을 받아와서 계정이나 세션을 만들거나 JWT발급함

서버 입장에서 비밀번호같은 것을 다룰 일이 없음. 유저도 편하고 서버도 편함

단점은 가입한 소셜 웹사이트 자체가 없어지면 난감하다

회원기능이 있다면

- 로그인 했을 때만 글쓰기 가능
- 누가 글 발행했는지 글쓴이 저장
- 내 글만 불러올 수도 있음(필터기능)

## 로그인 페이지 만들기 & 아이디 비번 검사
```
npm install passport passport-local express-session
터미널에 설치하기
```

 Session 방식 로그인 기능 구현하기

1. 라이브러리 3개 설치
2. server.js에 라이브러리 첨부

app.use(미들웨어)

웹서버는 요청 - 응답해주는 머신

미들웨어 : 요청 - 응답 중간에 뭔가 실행되는 코드

name 속성 → 서버 만들 때 제일 중요함. 이 폼이 어떤 폼인지 구분하기 위해 사용

1. 로그인 페이지 제작 & 라우팅

DB에 직접 아이디/비번 한쌍을 만들자

- login 이라는 collection 생성
- id : 'test' pw : 'test 임시유저의 아이디와 비번

passport : 로그인 기능 쉽게 구현할 수 있게 도와준다

1. 로그인을 하면 .. 아이디 비번 검사
2. 아이디 비번 인증하는 세부 코드 작성

일단 id 있는지 찾고 비번 대조

아이디/비번 맞는지 DB와 비교

done() 은 3개의 파라미터를 가질 수 있음

done(서버 에러, 성공시 사용자 DB데이터, 에러메세지)

아이디 / 비번 안맞으면 false넣어야 함

단점 : 보안이 안좋음 → pw가 암호화 되지 않았기 때문

아이디/비번 맞으면 세션을 하나 만들어줘야할듯

로그인 성공 → 세션 정보를 만듦(로그인 했었는지) → 마이페이지 방문시 세션 검사

개발자도구 Application으로 들어가기

Cookies 누르기 → 사이트 주소 들어가기 → 저장된 쿠키를 보여주는 공간이다

1. 누가 로그인하면 local방식으로 아이디/비번 인증
2. 인증 성공하면 세션 + 쿠키 만들어줌

마이페이지 접속 전 실행할 미들웨어

로그인 후 세션이 있으면 req.user가 항상 있음 (궁금하면 출력해보기)

로그인 후 /mypage 접속되는지 확인

Session 쿠키를 우클릭 - 삭제 후 /mypage 접속되는지 확인

회원기능 끝 (가입빼고)

회원가입 폼을 전송하면

DB에 저장해주면 끝(중복검사도 하고) 회원가입 기능 끝

deserializeUser()

로그인한 유저의 세션아이디를 바탕으로 개인정보를 DB에서 찾는 역할

로그인기능의 흐름을 잘 아는게 중요하다

## 검색기능 만들기
검색 누르면 새로운 페이지에서 검색결과 보여주는 기능

1. 검색버튼 누르면 서버에게 요청
2. 서버는 DB에서 데이터 꺼내줌

하나 찾을 때 collection().findOne()

여러 개 찾을 때 collection().find().toArray()

그걸 ejs파일로 보내주고 그러면 끝남

GET 요청으로 서버로 데이터 전달가능

GET요청은 URL만 잘 작성하면 된다

query string(query parameter = 서버로 몰래 전달되는 정보들

query string 작성방법 = localhost:8080/list?데이터이름(이(http://localhost:8080/list?데이터이름(이) 이름으로=데이터값(이 데이터가 서버로 전송된다)

문제점 : 정확히 일치하는 것만 찾아줌

- 정규식 쓰면 간단히 해결 → 정규식은 문자 검사하는 식이다
- 또 문제점 : 그냥 find()로 다 찾는건 항상 오래 걸린다
- indexing 해두면 게시물 1억개라도 빨리 찾아진다

Binary Search를 사용하면 검색 속도가 빨라진다

- 전제조건 : 미리 숫자순서대로 정렬이 되어있어야 한다.
- 미리 정렬해두면 (indexing 해두면) DB는 알아서 Binary Search로 찾아준다

index 생성방법

- 어떤 항목을 정렬하고 싶은지 작성
- 문자자료는 type을 'text'로 작성
- 숫자 자료는 type을 1 or -1로 작성

1. Binary Search 적용하고 싶으면 Index를 만들어 주기
2. MongoDB 문자자료는 index만들 때 한꺼번에 하기
3. DB조작은 원래 터미널로 합니다
터미널에 DB접속해서 .. 이것저것 명령을 내린다

index만들어둔걸로 빠르게 검색하려면

text index 만들어두면

1. 빠른 검색
2. 여러 키워드를 검색 가능
3. -제외가능
4. "정확히 일치하는 것만" 검색 가능 ""사용시

text index 문제점

1. 한글 친화적이지 않음
2. 띄어쓰기 기준으로 단어를 저장함(mongoDB 특징)
3. 한국 중국 일본어에는 쓰지 말자

해결책

1. 그냥 text index 쓰지 말고 검색할 문서의 양을 제한해두기(ex. 날짜로 1000개)
2. text index 만들 때 다르게 만들기(mongoDB Atlas에서는 못씀)(띄어쓰기 단위로 indexing 금지 / 글자 두개 단위로 indexing 해봐라(nGram))
3. 방금 만든 index 버리기(Drop index) → search index 만들기

    Create Search index

    Index Name 잘 지어야 함

    어떤 컬렉션에서 인덱스를 만들지 선택해야한다

    lucene.korean 찾아 적용하기(필요없는 조사를 걸러준다. 검색정확도 높아짐)

    indexing 하면 용량을 차지한다 → 꼭 필요한 것만 indexing 해두기

searchScore : mongoDB 가 검색할 때 점수를 매겨줌. 검색어와 게시물이 얼마나 관련 있는지 점수를 계산해줌

## 회원 기능을 포함한 게시판 기능
지금은 누구나 모든 글 삭제가 가능하다
내가 썼던 글만 삭제 가능하게 만들기

유저 여러명 필요할 것 같아서 회원가입기능부터 만듭시다
DB에 작성자가 누군지도 글마다 기록해야함

작성자 이름도 저장한다고 칩시다 → 굳이 그래야 하는가

이걸 가지고 login 컬렉션에 조회해보면 이름같은거 금방 나올 거 같음

유저 이름 없이 저장할 필요없이 _id만 저장해놓으면 되겠다

하지만 NoSQL DB는 안그럼

MongoDB는 그냥 자성자 이름 이런 부가정보도 게시물이랑 함께 저장함

장점 : 작성자 이름 꺼낸다고 다른 collection 뒤질 필요 없다

일명 denormalizing → 찾아보기

실제 로그인 중인 유저의_id와 글에 저장된 유저의_id가 일치하면 삭제해주게 만들기

## router 폴더와 파일을 만들어 API들 관리하기
app.use(미들웨어) 미들웨어를 사용하고 싶을 때 쓰는 문법

라우터를 사용하면 조금 더 직관적이고 수정이 필요하면 해당 파일을 수정해주면 된다

```javascript
// 라우터 파일 필수
// npm으로 설치했던 express 라이브러리의 Router() 함수를 쓰겠습니다.
// require 다른 파일이나 라이브러리 여기에 첨부하겠습니다.
var router = require('express').Router();

// 자바스크립트 파일을 다른 파일에서 갖다 쓰고 싶을 때 쓰는 문법
// 다른 곳에서 shop.js를 가져다 쓸 때 내보낼 변수
module.exports = router;
```
module.exports = 내보낼 변수명

require('파일경로') / require('라이브러리명')

미들웨어 : 요청과 응답 사이에 실행되는 코드

라우터에서 세부 라우팅해주기

특정 라우터파일에 미들웨어를 적용하고 싶으면?

로그인 한 사람만 방문가능하게 만들고 싶음

## 이미지 업로드 & 이미지 서버 만들기
업로드한 이미지 저장하는 법 - 보통 작업폴더안에 저장시킴

DB에 저장하면 안되나요? - 맘대로 해도 된다

하지만 일반적으로 그렇게 하지 않는다

1. 용량이 큼
2. 일반 하드에 저장하는게 싸고 편하다

업로드한 이미지를 폴더안에 저장하자

image 폴더 생성

```
npm install multer
설치하기
멀티펄트 데이터를 쉽게 처리할 수 있도록 도와주는 라이브러리
파일 전송하는 것을 쉽게쉽게 저장시키고 분석하는 것을 도와주는 라이브러리다
```

Q1 . 파일을 여러개 업로드?

upload.array(이름, 받을 최대 개수)

input도 고쳐야한다

Q2. 파일명을 다이나믹하게?

파일명에 '날짜' + new Date()....

필터 걸기 (이미지만 올려주세요)

filefilter : function(req, file, cb) {
}

Q3. 파일 형식 (확장자) 거르기

limits : 파일 사이즈를 제한을 걸 수 있다

업로드한 이미지 보여주기

- 누군가/어쩌구로 접속하면 어쩌구.jpg 보내줌

__dirname 현재 파일 경로

: 을 붙이면 URL parameter문법 → 유저가 아무거나 작성할 수 있음