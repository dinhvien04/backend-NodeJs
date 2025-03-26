const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
    name: String
});


const Kitten = mongoose.model('dinhvien', kittySchema);
// const silence = new Kitten({ name: 'Dinh Vien IT 45' });
// console.log(silence.name); // 'Silence'

// silence.save();
module.exports = Kitten