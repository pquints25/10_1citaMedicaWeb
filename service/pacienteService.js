const axios = require('axios').default;


const findAll = async () => {
    const pacientes = await axios.get('http://localhost:3000/pacientes')
    return pacientes;
    }
    
const findById = async () => {
    const pacientes = await axios.get('http://localhost:3000/pacientes/1',);
    console.log(pacientes.data);
    
        };

const insert = async () => {
        const pacientes = await axios.post ('http://localhost:3000/pacientes',{
            
        })
        console.log(pacientes.data);
        
}

const update = async () => {
    const pacientes = await axios.post ('http://localhost:3000/pacientes',{
        
    })
    console.log(pacientes.data);
};

const deleteById = async () => {
    const pacientes = await axios.get('http://localhost:3000/pacientes')
    return pacientes.data;
        }


module.exports = {
    findAll,
    findById,
    insert,
    update,
    deleteById
};