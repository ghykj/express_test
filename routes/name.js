var express = require('express');
var router = express.Router();

/* GET name listing. */

//get은 parameter로 받음

//localhost:3000/name -> 4가지 http method
// http get, post, put, delete

router.post('/', function(req, res, next){
  var res_data = {
    method : req.method,
    code : 200,
    data : "no body"
  };
  res.json(res_data);
});

router.post('/withbody', function(req, res, next){

  /*
  날짜, 이름, 걸음수, 오늘 한 운동, 총 칼로리

  이름 : 김나정
  날짜 : 2015-11-23
  라는 조건으로

  오늘 한 운동이랑 총 칼로리를 알고싶어요>ㅇ<
  */

  var name = req.body.name;
  var date = req.body.date;
  console.log("name : " + name);
  console.log("date : " + date);
  // var result = select * from 테이블 where name = name, date = date의 결과물

  var res_data = {
    method : req.method,
    code : 200,
    name : name,
    date : date
  };

  res.json(res_data);
});

router.get('/', function(req, res, next){
  var res_data = {
    method : req.method,
    code : 200,
    data : "no parameter"
  };
  res.json(res_data);
});

router.get('/:name', function(req, res, next) {


  var name = req.params.name; ////get은 parameter로 받음.
  //res.send('this is /name and your name is ' + name);
  /*json = {
    id : value,
    id : value
  };*/
  var response_data = {
    mehtod : req.method,
    code : 200,
    value: name
  };
  res.json(response_data);
});


module.exports = router;
