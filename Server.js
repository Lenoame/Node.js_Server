const express = require('express');
const app = express();
const bodyParser = require
app.use(bodyParser.urlencoded({extended : true}))
const MongoClient = require('mongodb').MongoClient;
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.set('view engine', 'ejs');

//static 파일을 보관하기 위해 public 폴더를 쓸거다
app.use('/public', express.static('public'));

//변수 하나 필요함
var db;
MongoClient.connect('mongodb+srv://Meno:<password>@cluster0.pcniu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(error, client){
	//연결되면 할일
	if (error) {
        return console.log(error)
    }
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
    
app.get('/edit/:id', function(req, res) {
	//url의 입력한 id부분을 불러와주세요
	db.collection('post').findOne({_id : parseInt(res.params.id)}, function(error, result){
		console.log(result) //결과 출력해보기
		res.render('edit.ejs', {post : result})
	})
});
    
    
app.put('/edit', function(req, res){
    // 폼에 담긴 제목 데이터, 날짜 데이터를 가지고
    // db.collection에다가 업데이트 하기
    db.collection('post').updateOne({ _id : parseInt(res.body.id)}, { $set : {title : req.body.title, date : req.body.date }}, function(error, result){
        console.log('수정완료')
        res.redirect('/list')
        // 응답은 
  })
})

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
    
app.post('/add', function(req, res) {
	res.send('전송완료');
	console.log(res.body.date);
	console.log(res.body.title);
	db.collection('post').insertOne({title : res.body.title, date : res.body.data}, function (error, result) {
	console.log('저장완료');
	});
});
    
// auto increment -> DB에 항목 추가할 때마다 자동으로 1증가시켜서 저장하는 것
// count를 사용해서 사면 안된다. 나중에 데이터를 수정할 때 혼선이 생길 수 있음
// 저장되는 시점에 따 혼선유발가능 : 애초에 고유한 id를 부여하는 것이 좋음
// 영구적으로 번호를 지정해서 저장하는 것이 좋음
// 발행된 총 게시물 갯수를 기록하는 저장공간
    
//누가 폼에서 /add로 POST 요청하면
app.post('/add', function(req, res) {
	res.send('전송완료');
	//쿼리문
	//add로 post 요청하면 (폼전송하면) DB의 총게시물갯수 데이터 가져오기
	db.collection('counter').findOne({name : '게시물갯수'}, function(error, result){
		console.log(result.totalPost)
		var totalPostNum = result.totalPost; // 총게시물갯수를 변수에 저장
	// 그게 완료되면 _id : totalPostNum + 1 해서 새로운 데이터를 post 콜렉션에 저장
        //DB.post에 새게시물을 기록함
        //총게시물갯수 + 1, 제목 날짜 저장해주세요
		db.collection('post').insertOne({ _id : totalPostNum + 1, title : req.body.title, date : req.body.date}, function(error, result){
			console.log('저장완료');
            //DB 데이터를 수정해주세요~
            //완료되면 DB.counter내의 총게시물갯수 + 1
            db.collection('counter').updateOne({name : 'totalPostNum'}, {$inc : {totalPost : 1}}, function(error, result){
                if (error) {return console.log(error)}
            });
		});
	});
});

    
app.get('/list', function(req, res){
	//DB에 저장된 post라는 collection 안에 모든 데이터를 꺼내주세요.
	//모든 데이터를 다 가져올 수 있음
    db.collection('post').find().toArray(function(error, result){
		console.log(result);
		// 1. DB에서 자료 찾아주세요
		// 2. 찾은거 ejs 파일에 집어넣어주세요
		// Object 형식으로 집어넣기
		res.render('list.ejs', {posts : result});
	});
});
//꺼낸 데이터 EJS 파일에 집어넣기

app.delete('/delete', function(req, res){
	console.log(req.body);
	req.body._id = parseInt(req.body._id); // 특정 값을 정수로 바꿔줌 
	// 요청시 함께 보낸 데이터를 찾으려면 요렇게 (아까 그 게시물 번호)
	db.collection('post').deleteOne(req.body, function(error, result) {
		console.log('삭제완료');
        //터미널 창에 출력
        res.status(200).send({message : '성공했습니다'});
        //응답코드 200을 보내주세요
        //그럼 실패시 뭘 실행해야 하는가
        res.status(400).send({message : '실패했습니다'})
        // 실패시 코드
        // 4XX를 보내면 고객 잘못으로 요청 실패라는 뜻
	})

	// DELETE 요청시 ... 게시물번호(_id)에 따라 DB에서 삭제
	
})

app.get('/detail/:id', function(req, res){
	//db에서 {_id : 1}인 것을 찾아주세요~
	db.collection('post').findOne({_id : parseInt(res.params.id)}, function(error, result) {
		console.log(result);
		res.render('detail.ejs', { data : result } ); 
    //db에서 찾은 결과물
	});
	
});
    
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : 'secreCode', resave : ture, saveUninitialized : false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', function(req, res){
    res.render('login.ejs')
});
    
app.post('/login', passport.authenticate('local', {
   failureRedirect : '/fail'
   // 회원 인증 실패하면 /fail로 이동
}), function(req, res) {
    res.redirect('/')
});
// 아이디 비번이 맞으면 로그인 성공페이지로 보내줘야함

// 미들웨어 쓰는 법
app.get('/mypage', function(req, res){
	console.log(req.user);
	res.render('mypage.ejs', {사용자 : req.user})
});

// 마이페이지 접속 전 실행할 미들웨어
// 미들웨어 만드는 법
function doLogin(req, res, next){
	// req.user가 있으면 next() (통과)
	if (req.user){
		next()
	// req.user가 없으면 경고메세지 응답
	} else {
		res.send('로그인안하셨는데요?')
	}
}
// 로그인 후 세션이 있으면 req.user가 항상 있음

passport.use(new LocalStrategy({
	// 유저가 입력한 아이디/비번 항목이 뭔지 정의(name속성)
	usernameField: 'id',
	passwordField: 'pw',
	// 로그인 후 세션을 저장할 것인지
    session: true,
    passReqToCallback: false,
	// 아이디/비번 말고도 다른 정보 검증시
}, function (입력한아이디, 입력한비번, done) {
  //console.log(입력한아이디, 입력한비번);
    db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
    if (에러) return done(에러)
    if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
    if (입력한비번 == 결과.pw) {
        return done(null, 결과)
    } else {
      return done(null, false, { message: '비번틀렸어요' })
    }
  })
}));
    
 
// id를 이용해서 세션을 저장시키는 코드 (로그인 성공시 발동)
// 아이디/비번 검증 성공시 여기로 보냄
// 세션 데이터를 만들고 세션의 id 정보를 쿠키로 보냄
passport.serializeUser(function(user, done){
   done(null, user.id)
});

// 이 세션 데이터를 가진 사람을 DB에서 찾아주세요(마이페이지 접속 시 발동)
passport.deserializeUser(function(id, done){
	//DB에서 위에있는 user.id로 유저를 찾은 뒤에 유저 정보를
	db.collection('login').findOne({id : 아이디}, function(error, result){
		done(null, {result})
	})
});
// 마이페이지 접속시 DB에서 {id : 어쩌구} 인걸 찾아서 그 결과를 보내줌
// 로그인한 유저의 개인정보를 DB에서 찾는 역할