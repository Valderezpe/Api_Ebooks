const express = require("express");

const ebooksController = require("./controllers/ebooksController");
const ebooksMiddleware = require("./middlewares/ebooksMiddleware");

const router = express.Router();

router.get('/ebooks', ebooksController.getAll);
router.post('/ebooks', ebooksMiddleware.validateFieldTitle, ebooksController.createEbook);
router.delete('/ebooks/:id', ebooksController.deleteEbook);
router.put('/ebooks/:id', ebooksMiddleware.validateFieldTitle,ebooksMiddleware.validateFieldName,ebooksController.updateEbook);

module.exports = router;