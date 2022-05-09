#!/usr/bin/env node

/**
 * crawler
 * Logs every single single contained in an entire website
 *
 * @author Clinton <https://clinton594.github.io/ugoson>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const crawl = require('./utils/crawl');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	// init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	crawl({
		url: 'https://demos.webicode.com/html/ico-chain/html/',
		n: 1
	});
})();
