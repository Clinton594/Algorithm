const request = require('request');
const cheerio = require('cheerio');

const crawl = ({ url }) => {
	request(url, function (error, response, body) {
		var $ = cheerio.load(body);

		$('a').each(function () {
			console.info($(this).text());
		});
	});
};

module.exports = crawl;
