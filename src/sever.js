// Sử dụng CommonJS
const express = require('express');
require('dotenv').config();
console.log(">>> check env: ", process.env);
const configViewEngine = require('./config/viewEngine');
const webroute = require('./routes/web');
const app = express();
// const port = 3000;
// const hostname = 'loaclhost';


configViewEngine(app); // cấu hình qua file config


// Route trang chủ
app.use('/', webroute);

// Lắng nghe yêu cầu
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
