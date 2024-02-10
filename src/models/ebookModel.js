const connection  = require('./connection');

const getAll = async() =>{
    const [ebooks] = await connection.execute('SELECT * FROM ebooks');
    return ebooks;
};

const createEbook = async (ebook)=>{

    const {title} = ebook;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query= 'INSERT INTO  ebooks(title, name, description, created_at) VALUES(?, ?, ?, ?)';

    const [createdEbook] = await connection.execute(query,[title, 'name', 'description', 'dateUTC'])

    return {insertId: createdEbook.insertId};
};
const deleteEbook = async (id)=>{
    const removedEbook = await connection.execute('DELETE FROM ebooks WHERE id = ?', [id])
    return removedEbook;
};

const updateEbook = async (id , ebook) =>{
    const query ='UPDATE ebooks SET title= ?, name = ? WHERE id = ?'
    const {title, name} = ebook;
    const updateEbook = await connection.execute(query, [title, name, id] )
    return updateEbook;
}

module.exports= {
    getAll,
    createEbook,
    deleteEbook,
    updateEbook
}