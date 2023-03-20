const toyService = require('./toy.service.js')

const logger = require('../../services/logger.service')

async function getToys(req, res) {
  try {
      const filterBy = {
        name: req.query.filterBy?.name || '',
        inStock: req.query.filterBy?.inStock || true,
        labels:req.query.filterBy?.labels || null,
      }
      let {sort} = req.query
    const toys = await toyService.query(filterBy,sort)
    res.json(toys)
  } catch (err) {
    logger.error('Failed to get toys', err)
    res.status(500).send({ err: 'Failed to get toys' })
  }
}

async function getToyById(req, res) {
  try {
    const toyId = req.params.id
    console.log('toyId',toyId)
    const toy = await toyService.getById(toyId)
    res.json(toy)
  } catch (err) {
    logger.error('Failed to get toy', err)
    res.status(500).send({ err: 'Failed to get toy' })
  }
}

async function addToy(req, res) {
  const {loggedinUser} = req

  try {
    const toy = req.body
    const addedtoy = await toyService.add(toy)
    res.json(addedtoy)
  } catch (err) {
    logger.error('Failed to add toy', err)
    res.status(500).send({ err: 'Failed to add toy' })
  }
}


async function updateToy(req, res) {
  try {
    const toy = req.body
    const updatedtoy = await toyService.update(toy)
    res.json(updatedtoy)
  } catch (err) {
    logger.error('Failed to update toy', err)
    res.status(500).send({ err: 'Failed to update toy' })

  }
}

async function removeToy(req, res) {
  console.log('hi')
  try {
    console.log('req')
    const toyId = req.params.id
    console.log('toyId',toyId)
    await toyService.remove(toyId)
    res.send()
  } catch (err) {
    logger.error('Failed to remove toy', err)
    res.status(500).send({ err: 'Failed to remove toy' })
  }
}

async function addToyMsg(req, res) {
  const {loggedinUser} = req
  try {
    const toyId = req.params.id
    const msg = {
      txt: req.body.txt,
      by: loggedinUser
    }
    const savedMsg = await toyService.addtoyMsg(toyId, msg)
    res.json(savedMsg)
  } catch (err) {
    logger.error('Failed to update toy', err)
    res.status(500).send({ err: 'Failed to update toy' })

  }
}

async function removeToyMsg(req, res) {
  const {loggedinUser} = req
  try {
    const toyId = req.params.id
    const {msgId} = req.params

    const removedId = await toyService.removetoyMsg(toyId, msgId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove toy msg', err)
    res.status(500).send({ err: 'Failed to remove toy msg' })

  }
}

module.exports = {
  getToys,
  getToyById,
  addToy,
  updateToy,
  removeToy,
  addToyMsg,
  removeToyMsg
}
