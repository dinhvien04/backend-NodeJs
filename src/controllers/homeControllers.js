const getHome = (req, res) => {
    res.send('Chao mung dinh vien');
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