/* eslint-disable @typescript-eslint/no-unused-vars */
import { readdirSync } from 'fs';
import { join } from 'path';

export function get() {
	return {
		body: readdirSync(process.cwd()).toString()
	};
}
