module.exports = app => {
	app.use('*', (req, res) => {
		let dir = __dirname;
		const dirSplit = dir.split('controllers');
		dir = dirSplit[0];
		console.log(dir);
		res.send(dir + '/public/index.html');
	});

	app.post('/', function(req, res) {
		console.log("welcome home");

	})
};