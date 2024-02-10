const validateFieldTitle =(req, res , next) => {
    const {body} = req;
   
    if(body.title == undefined)
    { return res.status (400).json({message: 'the fild "title" is required'});
    }

    if(body.title == ''){
         return res.status (400).json({message: 'title cannot  be empty'});
    }
    next();
};

const validateFieldName =(req, res , next) => {
    const {body} = req;
   
    if(body.name == undefined)
    { return res.status (400).json({message: 'the fild "title" is required'});
    }

    if(body.name == ''){
         return res.status (400).json({message: 'name cannot  be empty'});
    }
    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldName
}