



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