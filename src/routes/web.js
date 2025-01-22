const express = require('express');
const { getHome, getABC, getDinhVien } = require('../controllers/homeControllers');

const router = express.Router();

router.get('/', getHome);
router.get('/abc', getABC);
router.get('/dinhvien', getDinhVien);
module.exports = router;