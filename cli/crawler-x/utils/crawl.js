var request = require('request'),
	cheerio = require('cheerio');

function crawl({ url }) {
	request(url, function (error, response, body) {
		var $ = cheerio.load(body);

		$('a').each(function () {
			console.info($(this).text());
		});
	});
}
module.exports = crawl;
