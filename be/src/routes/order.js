const router = require('express').Router()
const orderController = require('../controllers/OrderController')
const auth = require('../middleware/auth')

router.post('/', orderController.create)
router.post('/webhook', orderController.update)
router.put('/:id', orderController.updateStatus)
router.get('/', orderController.show)
router.get('/:id', orderController.find)
router.delete('/:id', orderController.delete)

module.exports = router