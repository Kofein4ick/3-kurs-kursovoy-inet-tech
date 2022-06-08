const Type = require('../models/Type')
const ApiError=require('../error/ApiError')

class TypeController {
    async create(req,res,next){
        try{
            const {name}=req.body
            const type=new Type({name})
            await type.save()
            return res.json(type)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        const types = await Type.find()
        return res.json(types)
    }
    async getOne(req,res){
        const {id}=req.params
        const type=await Type.findOne({_id:id})
        return res.json(type)
    }
}

module.exports=new TypeController()