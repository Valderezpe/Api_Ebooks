const app = require ("./app");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(3000, (PORT)=> console.log(`Server listening on port ${PORT}`));