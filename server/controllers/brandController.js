const Brand = require('../models/Brand')
const ApiError=require('../error/ApiError')

class BrandController {
    async create(req,res,next){
        try{
            const {name}=req.body
            const brand=new Brand({name})
            await brand.save()
            return res.json(brand)
    } catch(e){
        next(ApiError.badRequest(e.message))
    }
    }
    async getAll(req,res){
        const brands = await Brand.find()
        return res.json(brands)
    }
    async getOne(req,res){
        const {id}=req.params
        const brand=await Brand.findOne({_id:id})
        return res.json(brand)
    }
}

module.exports=new BrandController()