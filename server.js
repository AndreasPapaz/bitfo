const express = require('express');
const bodyParser = require('body-parser');
const twitter = require('ntwitter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: 'application/vnd.api+json'
}));
app.use(express.static(__dirname + '/public/assets'));
//Make Public Folder Static
app.use(express.static('public'));

//Routes
require('./controllers/controller')(app);

app.listen(PORT, () => {
	console.log("BITFO : ", PORT);
});