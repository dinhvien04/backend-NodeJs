const express = require('express'); // Sử dụng CommonJS
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs');

// Route trang chủ
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Chào mừng Đình Viễn');
});

// Route thứ hai
app.get('/abc', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Anh Yêu Em');
});



// Route hiển thị HTML
app.get('/dinhvien', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8'); // Đảm bảo gửi nội dung HTML
    // res.send('<h1>H1</h1>'); // Nội dung HTML
    res.render('sample.ejs');
});

// Lắng nghe yêu cầu
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000/');
});
