const Router = require('express')
const carController = require('../controllers/carController')
const router =new Router()

router.post('/',carController.create)
router.get('/',carController.getAll)
router.get('/:id',carController.getOne)
router.delete('/:id',carController.del)
router.put('/:id',carController.put)

module.exports=router