const uuid=require('uuid')
const path=require('path')
const ApiError=require('../error/ApiError')
const Car = require('../models/Car')
class CarController {
    async create(req,res,next){
        try{
            const {name,price,brandId,typeId,engine,wd,color}=req.body
            const{picture}=req.files
            let fileName=uuid.v4()+".jpg"
            picture.mv(path.resolve(__dirname,'..','static',fileName))
            const car = new Car({name,price,brandId,typeId,picture:fileName,engine,wd,color}) 
            console.log(car)
            await car.save()
            return res.json(car)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req,res){
        const {brandid,typeid}=req.query
        let cars
        if(!brandid && !typeid){
            cars = await Car.find()
        }
        if(brandid && !typeid){
            cars = await Car.find({brandId: brandid})
        }
        if(!brandid && typeid){
            cars = await Car.find({typeId: typeid})
        }
        if(brandid && typeid){
            cars = await Car.find({typeId: typeid, brandId: brandid})
        }
        return res.json(cars)
    }
    async getOne(req,res){
        const {id}=req.params
        const car=await Car.findOne({_id:id})
        return res.json(car)
    }
    async del(req,res){
        const {id}=req.params
        const car=await Car.findOneAndDelete({_id:id})
        return res.json({message: 'Удаление успешно!'})
    }
    async put(req,res,next){
        try{
            const {name,price,brandId,typeId,engine,wd,color}=req.body
            const {id}=req.params
            const{picture}=req.files
            let fileName=uuid.v4()+".jpg"
            picture.mv(path.resolve(__dirname,'..','static',fileName))
            const car = await Car.findOneAndUpdate({_id:id},{name,price,brandId,typeId,engine,wd,color})
            console.log(car)
            return res.json(car)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports=new CarController()