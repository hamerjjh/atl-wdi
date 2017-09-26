//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create your donut schema:
const Schema = mongoose.Schema;

const donutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

const donutSchema = mongoose.model('donut', donutSchema);
//export your donut with module.exports()
moduel.exports = {
    donutSchema: donutSchema
};