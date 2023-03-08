const {envelopes} = require("../config/db");

const findEnvelopeById = (id) =>{
    if(envelopes.filter(envelope => envelope.id === id).length > 0)
    {
        return envelopes[id -1];
    }else{
        console.log("Invalid Id!!!");
    }
}


const createEnvelope = (instance)=>{
    const lastestRecord = envelopes[envelopes.length-1];
    const newId = lastestRecord.id +1;
    if(findEnvelopeById(instance.id).length =1 || instance.id <0 || instance.id === undefined){
        console.log("Invalid Envelop, recreate");
    }else{
        envelopes.push(instance);
        instance.id = newId;
    }
}

const deleteEnvelopeById = (id) =>{
    if(envelopes.id === undefined || envelopes.id < 0){
        console.log("Invalid Id!!!");
    }else{
        envelopes.splice(findEnvelopeById(id).id -1);
    }

}


