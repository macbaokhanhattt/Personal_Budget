const express = require('express');
const {envelopes} = require('../config/db.js');
const {findEnvelopeById,createEnvelope,deleteEnvelopeById} = require('../helpers/db-helpers');

    const checkParam = (req, res, next, id)=>{

        const ID = Number(id);
        console.log(ID);
        const envelope = findEnvelopeById(ID);
        console.log(envelope);
        if(findEnvelopeById(ID)){
            req.envelope= envelope;
            next();
        }else{
            res.status(404).send();
        }
    };
    const getAllEnvelope = (req, res, next) => {
        res.send(envelopes);
    };

    const getEnvelopeById = (req, res, next) => {
        res.send(req.envelope);
    };

    const removeEnvelope = (req, res, next) =>{
        deleteEnvelopeById(req.envelope.id);
        res.send(`Removed Envelope with id ${req.envelope.id}`);
    };

module.exports = {
    getAllEnvelope,
    getEnvelopeById,
    checkParam,
    removeEnvelope
}




