const express = require('express');
const { getHome, getABC, getDinhVien, portCreateUser, getCreatePage, getUpatePage, postUpdateUser } = require('../controllers/homeControllers');
const router = express.Router();

router.get('/', getHome);
router.get('/abc', getABC);
router.get('/dinhvien', getDinhVien);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpatePage);
router.post('/create-user', portCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;