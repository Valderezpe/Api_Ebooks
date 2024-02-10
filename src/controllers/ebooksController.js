const ebookModel = require ('../models/ebookModel');

const getAll = async (_req, res)=>{
    const ebooks = await ebookModel.getAll();

    return res.status(200).json(ebooks);
};

const createEbook = async (req, res)=>{
    const createdEbook = await ebookModel.createEbook(req.body);
    return res.status(201).json(createdEbook);
};

const deleteEbook = async (req, res) =>{
    const {id} = req.params;
    await ebookModel.deleteEbook(id);
    return res.status(204).json();
}

const updateEbook = async (req, res )=>{
    const {id} = req. params;
    await ebookModel.updateEbook(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createEbook,
    deleteEbook,
    updateEbook
}