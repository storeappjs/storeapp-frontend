/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as unified from 'unified';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';
// @ts-ignore
import metadataParser from 'markdown-yaml-metadata-parser';
import fs from 'fs';
import rehypeHighlight from 'rehype-highlight';

export function get({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const data = fs.readFileSync(`src/posts/${slug}.md`).toString();
	const config = metadataParser(data);
	const htmlText = unified
		.unified()
		.use(markdown)
		.use(remark2rehype)
		.use(html)
		.use(rehypeHighlight)
		.processSync(config.content);
	return {
		body: JSON.stringify({
			data: config.metadata,
			html: htmlText.toString()
		} as never)
	};
}
