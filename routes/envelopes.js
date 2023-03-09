const express = require('express');

const {getAllEnvelope, getEnvelopeById, checkParam, removeEnvelope, postEnvelope, updateEnvelope, transferMoney,
    checkParam1, checkParam2
} = require('../controllers/envelopes');

const Routes = express.Router();

Routes.param('id',checkParam);

Routes.param('id1',checkParam1);

Routes.param('id2',checkParam2);

Routes.get('/',getAllEnvelope);

Routes.get('/:id',getEnvelopeById);

Routes.post('/',postEnvelope);

Routes.put('/:id',updateEnvelope);

Routes.post('/transfer/:id1/:id2',transferMoney);

Routes.delete('/:id',removeEnvelope);

module.exports = {Routes}