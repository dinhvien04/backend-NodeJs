const express = require('express');
const { getHome, getABC, getDinhVien, portCreateUser } = require('../controllers/homeControllers');
const router = express.Router();

router.get('/', getHome);
router.get('/abc', getABC);
router.get('/dinhvien', getDinhVien);
router.post('/create-user', portCreateUser);
module.exports = router;