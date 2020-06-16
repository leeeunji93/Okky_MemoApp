// const express = require('express'); //express 쓰겠다
// const app = express(); //express를 app에 넣기
// const cors = require('cors'); //같은 브라우저 내에 충동방지
// const mysql = require('mysql');
// const dbconfig = require('./database.js'); //db가져오겠다
// const connection = mysql.createConnection(dbconfig);
// const bodyParser = require('body-parser'); //json에 있는 데이터 추출해요 여기서 json은 다 객체로 추출댐
// const port = process.env.PORT || 3001; //포트 번호 설정

// app.use(cors());

// app.use(bodyParser.json());
// // req => 요청한 정보 res => 담은 정보를 브라우저에 뿌려주는다
// // app.use('/api', (req, res) => res.json({ username: 'bryan' })); //api 포트번호 뒤에 붙는걸 명시하는거임

// app.listen(port, () => {
//   console.log(`express is running on ${port}`);
// });

// app.post('/get', function (req, res) {
//   var id = req.body.id;
//   console.log('hi');
//   connection.query('SELECT * FROM MEMO WHERE ID = ?', [id], function (
//     err,
//     rows,
//     field,
//   ) {
//     if (!err) {
//       res.send(rows);
//     } else {
//       console.log('Error', err);
//     }
//   });
// });

var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./database.js');
var connection = mysql.createConnection(dbconfig);
const cors = require('cors');
var app = express();
var dateFormat = require('dateformat');

var newDate = new Date();
var time = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

app.put('/create', function (req, res) {
  var m_title = req.body.title;
  var m_category = req.body.category;
  var m_content = req.body.content;
  var m_nickname = 'doosan';

  /*var sql = 'INSERT INTO memo (title, category, content, reg_date, nickname)
    VALUES('+m_title+', '+m_category+', '+m_content+', '+Date.now()+', '+"doosan"+')';*/

  var sql =
    'INSERT INTO memo (title, category, content, reg_date, nickname) ' +
    'VALUES(?, ?, ?, ?, ?)';
  var params = [m_title, m_category, m_content, time, m_nickname];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log('err', err);
    } else {
      res.send('Input Succeed');
    }
  });
});

app.get('/list', function (req, res) {
  connection.query('SELECT * FROM memo', function (err, rows, field) {
    if (!err) {
      /*console.log("rows", rows);*/
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

app.post('/get', function (req, res) {
  var id = req.body.id;
  connection.query('SELECT * FROM MEMO WHERE ID = ?', [id], function (
    err,
    rows,
    field,
  ) {
    if (!err) {
      res.send(rows);
    } else {
      console.log('Error while performing Query.', err);
    }
  });
});

app.delete('/delete', function (req, res) {
  var id = req.body.id;
  /*console.log("데이터", id);*/
  connection.query('DELETE FROM MEMO WHERE ID=(?)', id, function (
    err,
    rows,
    fields,
  ) {
    if (err) {
      console.log('err', err);
    } else {
      res.send('Delete Succeed');
    }
  });

  /* */
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port' + app.get('port'));
});
