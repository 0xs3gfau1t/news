const express = require('express')
const adModel = require('@/model/ads')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    adModel.findOne({_id: req.params.id},
        (err, data) => {
            if (err) res.status(404)
            res.send(data.image)
        }
    )
}
