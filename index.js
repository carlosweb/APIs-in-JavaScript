const express = require('express')
const app = express()

app.listen(3000, () => console.log('start server'))

app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

app.post('/api', (resquest, response) => {
    console.log(resquest)
    const data = resquest.body
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    })
})