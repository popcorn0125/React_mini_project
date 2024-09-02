const mysql = require('mysql2');

const db_info = {
    host: 'localhost', // 데이터베이스 주소
    port: '3306', // 데이터베이스 포트
    user: 'root',
    password: '1234',
    database: 'react_board'
};
module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function (conn) {
        conn.connect(function (err) {
            if (err) console.error("mysql connection : " + err);
            else console.log('mysql is connected successfully!');
        });
    },
};