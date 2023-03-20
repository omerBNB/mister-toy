

// const fs = require('fs')
// const gToys = require('./data/toy.json')

// // console.log('gToys', gToys)
// module.exports = {
//     query,
//     getById,
//     remove,
//     save
// }

// const PAGE_SIZE = 4

// function query(filterBy = { name: '', page: 0, inStock: true, labels: [] }, sortBy) {
//     var toys = gToys
//     // console.log('toys',toys)
//     if (sortBy) {
//         if (sortBy.by === 'Name') toys = gToys.sort((a, b) => a.name.localeCompare(b.name) * sortBy.diff)
//         if (sortBy.by === 'Price') toys = gToys.sort((a, b) => (a.price - b.price) * sortBy.diff)
//         if (sortBy.by === 'CreatedAt') toys = gToys.sort((a, b) => (a.createAt - b.createAt) * sortBy.diff)
//     }
//     if (filterBy.name) {
//         const regex = new RegExp(filterBy.name, 'i')
//         toys = gToys.filter(toy => regex.test(toy.name))
//     }
//     if (filterBy.inStock === 'false') {
//         toys = gToys.filter(toy => toy.inStock === false)
//         // console.log('toys',toys)
//     } else {
//         toys = gToys.filter(toy => toy.inStock === true)
//         // console.log('toys',toys)
//     }
//     if (filterBy.labels?.length) {
//         toys = gToys.filter(toy => {
//             // console.log('toy', toy)
//             return filterBy.labels.some(label => toy.labels.includes(label))
//         })
//     }
//     //HERE
//     // const totalPages = Math.ceil(gToys.length / PAGE_SIZE)
//     // const startIdx = filterBy.page * PAGE_SIZE
//     // toys = toys.slice(startIdx, startIdx + PAGE_SIZE)
//     // var toys = gToys
//     //HERE - SENDING BACK TOTALPAGES
//     return Promise.resolve(
//         // totalPages,
//         toys)
// }

// function getById(toyId) {
//     console.log('toyId',toyId)
//     const toy = gToys.find(toy => toy._id === toyId)
//     console.log('toy',toy)
//     if (!toy) return Promise.reject('Unknonwn toy')
//     return Promise.resolve(toy)
// }

// function remove(toyId) {
//     const idx = gToys.findIndex(toy => toy._id === toyId)
//     if (idx === -1) return Promise.reject('Unknonwn toy')

//     gToys.splice(idx, 1)
//     return _savetoysToFile()
// }

// function save(toy) {
//     var savedtoy
//     console.log('toy', toy)
//     if (toy._id) {
//         savedtoy = gToys.find(currtoy => currtoy._id === toy._id)
//         if (!savedtoy) return Promise.reject('Unknonwn toy')
//         savedtoy.name = toy.name
//         savedtoy.price = toy.price
//         savedtoy.labels = toy.labels
//     } else {
//         savedtoy = {
//             _id: _makeId(),
//             name: toy.name,
//             price: toy.price,
//             labels: toy.labels,
//             createdAt: Date.now(),
//             src: toy.src,
//             inStock: true
//         }
//         gToys.push(savedtoy)
//     }
//     return _savetoysToFile().then(() => {
//         return savedtoy
//     })
// }

// function _makeId(length = 5) {
//     var txt = ''
//     var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     for (let i = 0; i < length; i++) {
//         txt += possible.charAt(Math.floor(Math.random() * possible.length))
//     }
//     return txt
// }

// function _savetoysToFile() {
//     return new Promise((resolve, reject) => {
//         const data = JSON.stringify(gToys, null, 2)

//         fs.writeFile('data/toy.json', data, (err) => {
//             if (err) return reject(err)
//             resolve()
//         })
//     })
// }