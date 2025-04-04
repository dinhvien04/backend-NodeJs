const express = require('express');
const connection = require('../config/database');
const { getAllUser, getUserById, updateUserById, deleteUserById } = require('../services/CRUDServices');


const user = require('../models/user');


const getHome = async (req, res) => {
    let results = await user.find({});  // lấy data từ nosql
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
    let userId = req.body.userId;

    console.log("email: ", email, "name: ", name, "city: ", city, "id: ", userId);

    // let [results, fields] = await connection.query(
    //     'insert into users(email,name, city) values (?,?,?)', [email, name, city]
    // );
    // console.log(results);
    await user.create({
        email: email,
        name: name,
        city: city
    });
    res.send(`
        <h2>Create user succeed</h2>
        <button onclick="window.location.href='/'">Go to Home</button>
        `);
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpatePage = async (req, res) => {
    // console.log(req.params);
    // let [results, fields] = await connection.query('select * from users where id = ?', [req.params.id]);
    // console.log(results);
    const userId = req.params.id;
    let results = await user.findById(userId).exec();
    res.render('edit.ejs', { userEdit: results });
}
const postUpdateUser = async (req, res) => {

    let userId = req.body.userId;
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // await updateUserById(userId, email, name, city);
    // let [results, fields] = await connection.query(
    //     'update users set email = ?, name = ?, city = ? where id = ?', [email, name, city, userId]
    // );


    await user.updateOne({ _id: userId }, { email: email, name: name, city: city }); // nosql
    // console.log(results);
    res.send(`
        <h2>Update user succeed</h2>
        <button onclick="window.location.href='/'">Go to Home</button>
        `);
}
const portDeleteUser = async (req, res) => {
    const userId = req.params.id;

    // let results = await getUserById(userId);
    let results = await user.findById(userId);

    res.render('delete.ejs', { userEdit: results });
}
const portRemoveUser = async (req, res) => {
    const id = req.body.userId;
    // let [results, fields] = await connection.query('delete from users where id = ?', [id]);
    // let results = await deleteUserById(id);
    let results = await user.deleteOne(
        { _id: id }
    );
    res.send(`
        <h2>Remove user succeed</h2>
        <button onclick="window.location.href='/'">Go to Home</button>
    `);;
    // res.redirect('/');   
}
module.exports = {
    getHome, getABC, getDinhVien, portCreateUser, getCreatePage,
    getUpatePage, postUpdateUser, portDeleteUser, portRemoveUser
}