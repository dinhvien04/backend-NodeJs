const express = require('express');
const { getHome, getABC, getDinhVien, portCreateUser, getCreatePage, getUpatePage } = require('../controllers/homeControllers');
const router = express.Router();

router.get('/', getHome);
router.get('/abc', getABC);
router.get('/dinhvien', getDinhVien);
router.get('/create', getCreatePage);
router.get('/update', getUpatePage);
router.post('/create-user', portCreateUser);

module.exports = router;