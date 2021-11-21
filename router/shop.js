// 라우터 파일 필수
// npm으로 설치했던 express 라이브러리의 Router() 함수를 쓰겠습니다.
// require 다른 파일이나 라이브러리 여기에 첨부하겠습니다.
var router = require('express').Router();


function doLogin(req, res, next){
	// req.user가 있으면 next() (통과)
	if (req.user){
		next()
	// req.user가 없으면 경고메세지 응답
	} else {
		res.send('로그인안하셨는데요?')
	}
}
// 여기있는 모든 URL에 적용할 미들웨어
// 아래 있는 모든 라우터들에 적용가능
// router.use(로그인했니);
// 특정 URL에만 적용하는 미들웨어
router.use('/shirts', doLogin);

//app 대신에 router 함수 쓰기
// 개별 URL에 미들웨어 적용하는 법
// router.get('/shirts', 로그인했니, function(req, res) {
// 	res.send('셔츠 파는 페이지입니다.');
// });

router.get('/shirts', function(req, res) {
	res.send('셔츠 파는 페이지입니다.');
});

// router.get('/pants', doLogin, function(req, res) {
// 	res.send('바지 파는 페이지입니다.');
// });

router.get('/pants', function(req, res) {
	res.send('바지 파는 페이지입니다.');
});

// 자바스크립트 파일을 다른 파일에서 갖다 쓰고 싶을 때 쓰는 문법
// 다른 곳에서 shop.js를 가져다 쓸 때 내보낼 변수
module.exports = router;