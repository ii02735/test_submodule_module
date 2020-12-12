const express = require('express')
const app = express();
app.get('/',(req,res) => res.json({'hello':'module !'}))
app.listen(process.env.PORT || 2500)