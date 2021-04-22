const express = require('express')
const synopsis = require('./showdata.js')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { synopsis })
})

app.get('/', (request, response) => {
  response.render('showdata', { synopsis })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(8900, () => {
  console.log('Listening on 8900...') // eslint-disable-line no-console
})
