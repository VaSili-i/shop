require('dotenv').config();
const express = require('express');
const db = require('./db.js');
const router = require('./router/index.js');
const fileUpload = require('express-fileupload')
const app = express();
const PORT = process.env.PORT || 6001;
const path = require('path')
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname + '/static')))
app.use('/', router)

const start = async function(){
	await db.authenticate()
	await db.sync()
	await app.listen(PORT, () => console.log(`server work on: ${PORT}`));
}


start()