
// const express = require('express')
// const cookieParser = require('cookie-parser')
// const cors = require('cors')

// const app = express()
// const port = process.env.PORT || 3030

// const corsOptions = {
//     origin: ['http://127.0.0.1:5173','http://localhost:5173'],
//     credentials: true
// }
// const toyService = require('./toy.service')

// app.use(express.static('public'))
// app.use(express.json())
// app.use(cookieParser())
// app.use(cors(corsOptions))

// app.get('/api/toy', (req, res) => {
//     const {filterBy,sort} = req.query
//     toyService.query(filterBy,sort)
//         .then(results => {
//             res.send(results)
//         })
//         .catch((err) => {
//             console.log('Error:', err)
//             res.status(400).send('Cannot load toys')
//         })
// })
// app.put('/api/toy', (req, res) => {
//     const { _id, name, price, labels, createdAt, inStock } = req.body
//     const toy = { _id, name, price, labels, createdAt, inStock}
//     toyService.save(toy)
//         .then(savedtoy => {
//             res.send(savedtoy)
//         })
//         .catch(err => {
//             console.log('Cannot save toy, Error:', err)
//             res.status(400).send('Cannot save toy')
//         })
// })
// app.post('/api/toy', (req, res) => {
//     console.log('req.body',req.body)
//     const { name, price, labels, createdAt, inStock, src} = req.body
//     const toy = { name, price, labels, createdAt, inStock, src}
//     console.log('toy',toy)
//     toyService.save(toy)
//         .then(savedtoy => {
//             res.send(savedtoy)
//         })
//         .catch(err => {
//             console.log('Cannot save toy, Error:', err)
//             res.status(400).send('Cannot save toy')
//         })
// })


// app.get('/api/toy/:toyId', (req, res) => {
//     const { toyId } = req.params
//     var visitedtoyIds = req.cookies.visitedtoyIds || []
//     console.log('visitedtoyIds', visitedtoyIds)
//     if (visitedtoyIds >= 3) return res.status(401).send('wait for a bit')
//     if (!visitedtoyIds.includes(toyId)) visitedtoyIds.push(toyId)
//     res.cookie('visitedtoyIds', visitedtoyIds, { maxAge: 7000 })
//     toyService.getById(toyId)
//         .then(toy => {
//             console.log('toy',toy)
//             res.send(toy)
//         })
//         .catch((err) => {
//             console.log('Error:', err)
//             res.status(400).send('Cannot load toy')
//         })
// })

// app.delete('/api/toy/:toyId', (req, res) => {
//     const { toyId } = req.params
//     toyService.remove(toyId)
//         .then(() => {
//             res.send('toy Deleted')
//         })
//         .catch((err) => {
//             console.log('Error:', err)
//             res.status(400).send('Cannot remove toy')
//         })
// })

// app.listen(port, () => {
//     console.log(`Toy listening on: http://127.0.0.1:${port}`)
// })
