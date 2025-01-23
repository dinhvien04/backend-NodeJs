const connection = require('../config/database');
const getHome = (req, res) => {
    let users = [];
    connection.execute(
        'SELECT * FROM users u',
        function (err, results, fields) {
            users = results;
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            console.log('check usser: ', users);
            res.send(JSON.stringify(users));
        }
    );
};
const getABC = (req, res) => {
    res.send('Anh yeu em');
};
const getDinhVien = (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('sample.ejs');
}

module.exports = {
    getHome, getABC, getDinhVien
}