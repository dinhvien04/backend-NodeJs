// Sử dụng CommonJS
require('dotenv').config();
const express = require('express');
// console.log(">>> check env: ", process.env);
const configViewEngine = require('./config/viewEngine');
const webroute = require('./routes/web');
const connection = require('./config/database');
const app = express();
// const port = 3000;
// const hostname = 'loaclhost';

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded());

configViewEngine(app); // cấu hình qua file config


// Route trang chủ
app.use('/', webroute);

// test connnection
// connection.execute(
//     'SELECT * FROM users u',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );



// Lắng nghe yêu cầu
app.listen(8000, () => {
    console.log('Server đang chạy tại http://localhost:8000/');
});
