const express = require('express');
const app = express();

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