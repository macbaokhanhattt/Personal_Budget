const express = require('express');
const {findEnvelopeById,createEnvelope,deleteEnvelopeById} = require('../helpers/db-helpers');
const {getAllEnvelope, getEnvelopeById, checkParam} = require('../controllers/envelopes');

const Routes = express.Router();

Routes.param('id',checkParam);

Routes.get('/',getAllEnvelope);

Routes.get('/:id',getEnvelopeById);

module.exports = { Routes}