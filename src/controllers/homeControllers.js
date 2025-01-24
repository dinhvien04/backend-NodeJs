const e = require('express');
const connection = require('../config/database');
const getHome = (req, res) => {
    return res.render('home.ejs');
};
const getABC = (req, res) => {
    res.send('Anh yeu em');
};
const getDinhVien = (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('sample.ejs');
}
const portCreateUser = (req, res) => {
    // console.log(req.body);


    let email = req.body.Email;
    let name = req.body.myname;
    let city = req.body.city;

    // console.log("email: ", email, "name: ", name, "city: ", city);
    // res.send('create user');


    connection.query(
        'insert into users(email,name, city) values (?,?,?)', [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('create user succeed');
        }
    );

}

module.exports = {
    getHome, getABC, getDinhVien, portCreateUser
}