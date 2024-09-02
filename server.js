const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
// const mysql = require('mysql2');
const db = require('./mysql.js');
const conn = db.init();

app.set('port', 5050);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( {extended : false}));

/******* 회원 가입 ***************************************************/
// 회원 가입
app.post('/register', async (req, res) => {
    let body = req.body;
    let sql = 'SELECT count(user_id) as result from member where user_id=?';
    let params = [body.id];
    // 아이디 중복 확인
    conn.query(sql, params, function(err, result) {
        if(err) console.log('query is not excuted: ' + err);
        if(result[0].result == 1) res.send({message: '중복된 ID입니다. 새로운 ID를 입력해주세요' ,result: result[0].result});
    })
    sql = 'SELECT count(user_nickname) as result from member where user_nickname=?'
    params = [body.nickname];
    // 닉네임 중복 확인
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        if (result[0].result == 1) res.send({ message: '중복된 닉네임 입니다. 새로운 닉네임을 입력해주세요', result: result[0].result });
    })

    // 회원 정보 저장
    sql = 'INSERT INTO member (user_id, user_password, user_name, user_nickname) values (?, ?, ?, ?)';
    params = [body.id, body.pw, body.name, body.nickname];
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        if (result != null) res.send({ message: '회원 가입 성공', result: 200 });
    })

});
/********************************************************************* */

/******* 로그인 & 로그아웃 ***************************************************/
app.post('/login', (req, res) => {
    let body = req.body;

    let sql = 'SELECT count(user_id) as result from member where user_id=?';
    let params = [body.id];
    // 아이디 확인
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        if (result[0].result == 0) res.send({ message: '존재하지않는 ID 또는 비밀번호입니다. ID 또는 PASSWORD를 다시 입력해주세요', result: result[0].result });
    })
    // 비밀번호 확인
    sql = 'SELECT user_password as result, user_nickname as nickname from member where user_id=?'
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        // console.log(result[0].result != body.pw);
        if (result[0].result != body.pw) {
            res.send({ message: '존재하지않는 ID 또는 비밀번호입니다. ID 또는 PASSWORD를 다시 입력해주세요', result: 0 });
        }
        else {
            // 세션 생성 부분
            res.send({result: body.id, nickname : result[0].nickname}); 

        }
        
    })

})
/********************************************************************* */

/******* 게시글 불러오기 등록, 수정, 삭제 ***************************************************/
// 모든 게시글 불러오기
app.post('/getBoard', (req, res) => {

    const sql = 'select b.idx as idx, b.title as title, b.content as content, b.create_date as create_date, m.user_nickname as nickname' + 
                ' from board b join member m ON b.user_id = m.user_id '+
                'where b.isdelete = \'0\' order by b.idx DESC';
    conn.query(sql, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        res.send({result:result});
    })
})
// 게시글 상세 내용 불러오기
app.post('/detailBoard', (req, res) => {
    let body = req.body;
    const sql = 'select b.title as title, b.content as content, b.create_date as create_date, m.user_nickname as nickname' + 
                ' from board b join member m ON b.user_id = m.user_id '+
                'where b.idx = ?';
    const params = [body.idx]
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        res.send({result:result});
    })
})

// 등록
app.post('/createBoard', (req, res) => {
    let body = req.body;

    const sql = 'INSERT INTO board (title, content, user_id) VALUES (?, ?, ?)';
    const params = [body.title, body.content, body.writter];
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        if (result != null) res.send({ message: '게시글 등록 성공', result: 200 });
    })
})
// 수정
app.post('/createBoard', (req, res) => {
    let body = req.body;

    const sql = '';
    const params = [body.idx];
    conn.query(sql, params, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        if (result != null) res.send({ message: '게시글 등록 성공', result: 200 });
    })
})

// 삭제
app.post('/createBoard', (req, res) => {
    let body = req.body;

    const sql = 'UPDATE board SET isdelet=1 WHERE idx=' + body.idx;
    conn.query(sql, function (err, result) {
        if (err) console.log('query is not excuted: ' + err);
        if (result != null) res.send({ message: '게시글 삭제 완료', result: 200 });
    })
})
/********************************************************************* */

server.listen(app.get('port'), () => {
    console.log(`서버 실행 중 >> http://localhost:${app.get('port')}`);
})