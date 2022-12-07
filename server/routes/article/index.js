const express = require('express')
const router = express.Router()

const withAuth = require('../../middlewares/withAuth')

const addArticle = require('./addArticle')
const delArticle = require('./delArticle')
const editArticle = require('./editArticle')
const getArticle = require('./getArticle')
const listArticle = require('./listArticle')

router.get('/list*', listArticle)
router.get('/:year/:month/:slug', getArticle)
router.post('/', withAuth, addArticle)
router.delete('/', withAuth, delArticle)
router.patch('/', withAuth, editArticle)

module.exports = router
