const express = require('express'); // Sử dụng CommonJS
const path = require('path');
require('dotenv').config();
console.log(">>> check env: ", process.env);

const app = express();
// const port = 3000;
// const hostname = 'loaclhost';

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs');

//config static
app.use(express.static(path.join(__dirname, 'public')));

// Route trang chủ
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Chào mừng Đình Viễn & nodemon');
});
app.get('/abc', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Anh Yêu Em');
});
app.get('/dinhvien', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8'); // Đảm bảo gửi nội dung HTML
    // res.send('<h1>H1</h1>'); // Nội dung HTML
    res.render('sample.ejs');
});

// Lắng nghe yêu cầu
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
