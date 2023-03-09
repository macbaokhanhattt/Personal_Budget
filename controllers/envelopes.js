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

    const checkParam1 = (req, res, next, id1) =>{
        const ID = Number(id1);
        const ev1 = findEnvelopeById(ID);
        if(findEnvelopeById(ID)){
            req.ev1 = ev1;
            console.log('pass1');
            next();
        }else{
            res.status(404).send();
        }
    }

    const checkParam2 = (req, res, next , id2) =>{
        const ID = Number(id2);
        const ev2 = findEnvelopeById(ID);
        if(findEnvelopeById(ID)){
            req.ev2 = ev2;
            console.log('pass2');
            next();
        }else{
            res.status(404).send();
        }
    }
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

    const updateEnvelope = (req, res) =>{
        const selectedEv = req.envelope;
        console.log(selectedEv);
        const body = req.body;
        if(body.name){
            selectedEv.name =body.name;
        }
        if(body.money) {
            selectedEv.money = body.money;
        }
        res.send(selectedEv);
    }

    const transferMoney = (req, res) =>{
        console.log('zo ne');
        const envelope1 = req.ev1;

        const envelope2 = req.ev2;

        if(envelope1.money){
            envelope2.money =envelope2.money + envelope1.money;
            envelope1.money =0;
            res.send(envelope2);
        }else{
            res.status(404).send();
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
    postEnvelope,
    updateEnvelope,
    transferMoney,
    checkParam1,
    checkParam2

}




