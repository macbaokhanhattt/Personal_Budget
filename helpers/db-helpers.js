const {envelopes} = require("../config/db");


const findEnvelopeById = (id) =>{
    if(envelopes.filter(envelope => envelope.id === id).length > 0)
    {
        return envelopes[id -1];
    }else{
        console.log("Invalid Id!!!");
    }
}



const createNewId = (envelopesarray)=>{
  const lastestRecord = envelopesarray[envelopesarray.length -1];
  const ID = lastestRecord.id + 1;

  return ID;


}


const deleteEnvelopeById = (id) =>{
        envelopes.splice(findEnvelopeById(id).id -1,1);

}

module.exports = {
    findEnvelopeById,
    createNewId,
    deleteEnvelopeById
}


