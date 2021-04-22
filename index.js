const express = require('express')
const showdata = require('./showdata.js')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/showdata/:number', (request, response) => {
  const showdata = showdata.find((showdata) => { return showdata.seasons.number === parseInt(request.params.number) })

  return response.render('seasons', { showdata })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(8900, () => {
  console.log('Listening on 8900...') // eslint-disable-line no-console
})
