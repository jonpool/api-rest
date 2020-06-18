const  express = require('express');
const bodyPaser = require('body-parser');

const app = express();

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.send('OK');
});

app.listen(3000);