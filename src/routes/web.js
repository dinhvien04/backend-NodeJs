const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Chào mừng Đình Viễn & nodemon');
});
router.get('/abc', (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send('Anh Yêu Em');
});
router.get('/dinhvien', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8'); // Đảm bảo gửi nội dung HTML
    // res.send('<h1>H1</h1>'); // Nội dung HTML
    res.render('sample.ejs');
});
module.exports = router;