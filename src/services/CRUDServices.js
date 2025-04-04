const { get } = require("config");
const connection = require("../config/database")

const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('SELECT * FROM users where id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        'update users set email = ?, name = ?, city = ? where id = ?', [email, name, city, userId]
    );

}
const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        'delete from users where id = ?', [id]
    );

}
module.exports = {
    getAllUser, getUserById, updateUserById, deleteUserById
}