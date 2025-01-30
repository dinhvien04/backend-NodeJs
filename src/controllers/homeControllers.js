const express = require('express');
const connection = require('../config/database');
const { getAllUser } = require('../services/CRUDServices');
const getHome = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUsers: results });

};
const getABC = (req, res) => {
    res.send('Anh yeu em');
};
const getDinhVien = (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.render('sample.ejs');
}
const portCreateUser = async (req, res) => {
    // console.log(req.body);


    let email = req.body.Email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log("email: ", email, "name: ", name, "city: ", city);

    let [results, fields] = await connection.query(
        'insert into users(email,name, city) values (?,?,?)', [email, name, city]
    );
    console.log(results);
    res.send('create user succeed');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpatePage = async (req, res) => {
    console.log(req.params);
    let [results, fields] = await connection.query('select * from users where id = ?', [req.params.id]);
    console.log(results);

    let user = results && results.length > 0 ? results[0] : null;

    res.render('edit.ejs', { userEdit: user });
}

module.exports = {
    getHome, getABC, getDinhVien, portCreateUser, getCreatePage, getUpatePage
}