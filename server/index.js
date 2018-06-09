const express = require('express');
const bodyParser = require('body-parser');
const cc = require(__dirname + '/controllers/controller');
const cors = require('cors');
const app = express();

app.use( bodyParser.json() );
app.use(cors());

const apiBaseUrl = "/api/stuff";
app.post( apiBaseUrl, cc.create );
app.get( apiBaseUrl, cc.read );
app.put( `${apiBaseUrl}/:oldVal&:newVal`, cc.update );
app.delete(`${apiBaseUrl}/:val`, cc.delete );

const port = 3031;
app.listen( port, () => {console.log(`Server is listening on port ${port}.`);});