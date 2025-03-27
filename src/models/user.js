const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});


const user = mongoose.model('user', userSchema);
// const silence = new Kitten({ name: 'Dinh Vien IT 45' });
// console.log(silence.name); // 'Silence'

// silence.save();
module.exports = user