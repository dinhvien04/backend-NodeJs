// Sử dụng CommonJS
const express = require('express');
require('dotenv').config();
console.log(">>> check env: ", process.env);
const configViewEngine = require('./config/viewEngine');
const webroute = require('./routes/web');
const mysql = require('mysql2');
const app = express();
// const port = 3000;
// const hostname = 'loaclhost';


configViewEngine(app); // cấu hình qua file config


// Route trang chủ
app.use('/', webroute);

// test conn
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, // nếu k port thì sẽ là 3306
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});
connection.execute(
    'SELECT * FROM users u',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);



// Lắng nghe yêu cầu
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
