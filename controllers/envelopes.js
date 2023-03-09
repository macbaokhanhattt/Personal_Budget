const {envelopes} = require('../config/db.js');

const {findEnvelopeById,deleteEnvelopeById, createNewId} = require('../helpers/db-helpers');



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
    const getAllEnvelope = (req, res) => {
        res.send(envelopes);
    };

    const getEnvelopeById = (req, res) => {
        res.send(req.envelope);
    };

    const postEnvelope =(req, res)=>{
        try {
            const { name, money } = req.body;
            const newId = createNewId(envelopes);
            const  newEnvelope = {
                id: newId,
                name,
                money,
            };
            envelopes.push(newEnvelope);
            res.status(201).send(newEnvelope);
        } catch (err) {
           res.status(500).send(err);
        }
    }

    const removeEnvelope = (req, res) =>{
        deleteEnvelopeById(req.envelope.id);
        res.send(`Removed Envelope with id ${req.envelope.id}`);
    };

module.exports = {
    getAllEnvelope,
    getEnvelopeById,
    checkParam,
    removeEnvelope,
    postEnvelope
}




