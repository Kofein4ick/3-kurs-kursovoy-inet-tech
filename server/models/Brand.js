const {Schema,model,Types} = require('mongoose')
const schema = new Schema({
    name: {type: String},
})

module.exports=model('Brand', schema)