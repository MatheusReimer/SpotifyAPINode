const express = require('express')
const app = express()



app.use('/', require('./main/pageManager/pages'));
app.set('view engine','ejs');









app.listen(3000,()=>{
    console.log("Server OK on port 3000");
});

