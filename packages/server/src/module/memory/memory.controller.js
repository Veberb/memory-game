const { Router } = require('express')
const router = Router({ mergeParams: true })
const memoryManager = require('./memory.manager')

module.exports = app => {
  app.use('/memory', router)
}

router.get('/random/:length', async (req, res, next) => {
  console.log('oi')
  console.log(req.params)
  const random = await memoryManager.getRandomNumbersList({ ...req.params })
  return res.json(random)
})
