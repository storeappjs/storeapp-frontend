/* eslint-disable @typescript-eslint/no-unused-vars */
import { readFileSync } from 'fs';
import { join } from 'path';

export function get() {
	return {
		body: readFileSync(join(process.cwd(), 'src/posts/config.json')).toString()
	};
}
