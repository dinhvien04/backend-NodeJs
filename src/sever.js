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
const mongoose = require('mongoose');
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded());

configViewEngine(app); // cấu hình qua file config


// Route trang chủ
app.use('/', webroute);

// test connnection

// connection();
// connection.execute(
//     'SELECT * FROM users u',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Dinh Vien IT 45' });
console.log(silence.name); // 'Silence'

silence.save();



(async () => {
    try {
        await connection().then();
        app.listen(8000, () => {
            console.log('Server đang chạy tại http://localhost:8000/');
        });

    } catch (error) {
        console.log(">>> error: ", error);
    }
})();


// Lắng nghe yêu c
