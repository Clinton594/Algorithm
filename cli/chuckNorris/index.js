#!/usr/bin/env node

/**
 * chuckNorris
 * Gets a joke from the chuck norris API
 *
 * @author Clinton <ugoson.com>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	if (input.includes('joke')) {
		const response = await axios.get(
			'https://api.chucknorris.io/jokes/random'
		);
		console.log(response.data.value);
	}
})();
