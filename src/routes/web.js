const express = require('express');
const { getHome, getABC, getDinhVien, portCreateUser, getCreatePage } = require('../controllers/homeControllers');
const router = express.Router();

router.get('/', getHome);
router.get('/abc', getABC);
router.get('/dinhvien', getDinhVien);
router.get('/create', getCreatePage);
router.post('/create-user', portCreateUser);

module.exports = router;