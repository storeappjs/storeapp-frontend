/* eslint-disable @typescript-eslint/no-unused-vars */
import { lstatSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

export function get() {
	return {
		body: readFileSync('src/posts/config.json').toString()
	};
}
