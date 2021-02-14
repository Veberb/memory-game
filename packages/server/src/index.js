const express = require('express')
const cors = require('cors')
const glob = require('glob')
const path = require('path')

const app = express()

const main = () => {
  const corsOptions = {
    origin: 'http://localhost:3000'
  }

  app.use(cors(corsOptions))
  app.use(express.json({ limit: '25mb', type: 'application/json' }))

  const dirPath = path.normalize(`${__dirname}/..`)
  const apis = glob.sync(`${dirPath}/**/*.controller.js`)

  apis.forEach(apiPath => {
    require(`${apiPath}`)(app)
  })

  app.listen(4000, () => {
    console.log('running')
  })
}

main()

module.exports = app
