const {Schema,model,Types} = require('mongoose')
const schema = new Schema({
    name: {type: String},
    picture: {type: String},
    price:{type: Number},
    typeId:{type: Types.ObjectId},
    brandId:{type: Types.ObjectId},
    engine: {type: String},
    color: {type: String},
    wd: {type: String},
})

module.exports=model('Car', schema)