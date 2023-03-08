const express = require('express');
const {findEnvelopeById,createEnvelope,deleteEnvelopeById} = require('../helpers/db-helpers');
const {getAllEnvelope, getEnvelopeById, checkParam, removeEnvelope} = require('../controllers/envelopes');

const Routes = express.Router();

Routes.param('id',checkParam);

Routes.get('/',getAllEnvelope);

Routes.get('/:id',getEnvelopeById);

Routes.delete('/:id',removeEnvelope);

module.exports = { Routes}