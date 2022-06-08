const Router = require('express')
const router =new Router()
const carRouter = require('./Car.Router')
const brandRouter = require('./Brand.Router')
const typeRouter = require('./Type.Router')

router.use('/car',carRouter)
router.use('/brand',brandRouter)
router.use('/type',typeRouter)

module.exports=router