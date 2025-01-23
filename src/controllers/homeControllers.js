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
    console.log(">>req.body: ", req.body);
    res.send('create user');
}

module.exports = {
    getHome, getABC, getDinhVien, portCreateUser
}