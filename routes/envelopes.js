const express = require('express');

const {getAllEnvelope, getEnvelopeById, checkParam, removeEnvelope, postEnvelope} = require('../controllers/envelopes');

const Routes = express.Router();

Routes.param('id',checkParam);

Routes.get('/',getAllEnvelope);

Routes.get('/:id',getEnvelopeById);

Routes.post('/',postEnvelope);

Routes.delete('/:id',removeEnvelope);

module.exports = { Routes}