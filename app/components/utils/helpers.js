const axios = require('axios');
const Twitter = require('twitter');


const T = new Twitter({
	consumer_key: 'WLFFeOKBTfhyU4z0vgBJG3UGU',
	consumer_secret: 'HK4B6YM3jDm0f442Q51YBbuNmAhHF4l6QQ7eh0FF3eyub7FvP7',
	access_token: '830091872970346497-w9ghin4Hy3xUuZ2x0lVUe1frOReXezD',
	access_token_secret: '	pxLXiy1JlKQDnjUdPJnC373S6PJZk6BsCkzgXLejWnuBR',
});


const helper = {

	runQuery: function(some_param) {
		console.log("run query")
	},

	some_test: function() {
		client.get('statuses/user_timeline'm )
	}

}

module.exports = helper;

