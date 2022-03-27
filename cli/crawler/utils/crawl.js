const request = require('request');
const cheerio = require('cheerio');
const urlFormat = require('url');

// Store all seen urls
const crawled = {};

const crawl = async ({ url, n }) => {
	// Check if a url has been crawled before
	if (crawled[url]) return;
	console.log(url);
	//record the url as crawled
	crawled[url] = true;
	// get the host of the current page
	const { host } = urlFormat.parse(url);
	// make a get requset to retrieve the page
	const response = await get(url);
	// Preapare the Dom
	const $ = cheerio.load(response);
	// Extract all urls in an absolute format
	let links = $('a')
		.map((i, link) => absoluteUrl(link.attribs.href, host))
		.get();

	// Filter the ones from the current host and crawl through them again
	links = links.filter(link => link.includes(host));
	// chunk to links into n number of parallel workers
	links = chunk(links, n);

	links.forEach(group => group.forEach(link => crawl({ url: link, n })));
};

const get = url => {
	return new Promise(function (resolve, reject) {
		request(url, function (error, res, body) {
			if (!error && res.statusCode == 200) {
				resolve(body);
			} else {
				reject(error);
			}
		});
	});
};

const absoluteUrl = (url, host) => {
	if (!url.includes('http')) {
		if (url.includes('../')) {
			url = url.replace('../', '');
		} else url = `https://${host}${url}`;
	}
	return url;
};

const chunk = (arr, chunkSize = 1) => {
	let build = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		build.push(chunk);
	}
	return build;
};
module.exports = crawl;
