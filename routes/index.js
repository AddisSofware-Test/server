const router = require('express').Router()
const Controller = require('../controllers')

router.get('/song', Controller.getSongList)
router.post('/song', Controller.createSong)
router.get('/song/:id', Controller.songDetail)
router.put('/song/:id', Controller.updateSong)
router.delete('/song/:id', Controller.songDelete)
router.get('/statistic-list', Controller.getStatistic)

module.exports = router
