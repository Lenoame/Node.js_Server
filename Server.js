const express = require('express');
const app = express();
const bodyParser = require
app.use(bodyParser.urlencoded({extended : true}));

const MongoClient = require('mongodb').MongoClient;

//변수 하나 필요함
var db;
MongoClient.connect('mongodb+srv://Meno:<password>@cluster0.pcniu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(error, client){
	//연결되면 할일
	if (error) [return console.log(error)
	//todoapp 이라는 database(폴더)에 연결해주세요
	db = client.db('todoapp');
	//내 이름과 나이를 db에 저장해보자
	//post라는 파일에 insertOne{data}를 저장해주세요
	//name : 'Leno' -> Object자료형이다
	//_id를 꼭 써주어야한다
	db.collection('post').insertOne({_id : 111, name : 'Leno', age : 20}, function(error, result){
		console.log('저장완료');
	})
    
// 서버를 열 수 있는 명령어
app.listen(8080, function(){
	console.log('listening on 8080')
});

// 누군가가 /pet으로 방문하면.. pet관련된 안내문을 띄워주기
app.get('/pet', function(req, res){
	res.send('펫용품 쇼핑할 수 있는 페이지입니다.');
});

// 뷰티용품을 쇼핑할 수 있는 페이지 GET 요청
app.get('/beauty', function(req, res){
	res.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.');
});

// index.html 파일을 전송해주는 GET 요청
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
	res.send('전송완료');
	console.log(res.body);
	console.log(res.body.title);
	console.log(res.body.date);
});
// form에서 보낸 자료 (= res.body)
