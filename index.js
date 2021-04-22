const express = require('express')
const showdata = require('./showdata.js')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.get('/seasons/:number', (request, response) => {
  const showseason = showdata.seasons.find((season) => { 
    return showdata.seasons.number === parseInt(request.params.number)
  })

  return response.render('seasons', { season: showseason, 'title': showdata.title })
})

app.all('*'), (request, response) => {
  return request.sendStatus(404)
}

app.listen(8900, () => {
  console.log('Listening on 8900...') // eslint-disable-line no-console
})
