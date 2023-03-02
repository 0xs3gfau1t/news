const express = require('express')
const router = express.Router()

const withAuth = require('../../middlewares/withAuth')
const fetchHistory = require('../../middlewares/fetchHistory')

const addArticle = require('./addArticle')
const delArticle = require('./delArticle')
const editArticle = require('./editArticle')
const getArticle = require('./getArticle')
const listArticle = require('./listArticle')
const toPublish = require('./toPublish')
const publish = require('./publish')
const recite = require('./recite')

router.get('/list*', fetchHistory, listArticle)
router.get('/:year/:month/:slug', fetchHistory, getArticle)
router.get('/recite', fetchHistory, recite)
router.get('/topublish', toPublish)
router.post('/publish', publish)
router.post('/', withAuth, addArticle)
router.delete('/', withAuth, delArticle)
router.patch('/', withAuth, editArticle)

module.exports = router
