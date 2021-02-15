const { Router } = require('express')
const router = Router({ mergeParams: true })
const memoryManager = require('./memory.manager')

module.exports = app => {
  app.use('/memory', router)
}

router.get('/random/:length', async (req, res, next) => {
  const random = await memoryManager.getRandomNumbersList({ ...req.params })
  return res.json(random)
})
