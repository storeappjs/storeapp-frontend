<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { base } from '$app/paths';
	import type { PostType } from 'src/lib/post';

	export const load: Load = async ({ params, fetch }) => {
		const { slug } = params;
		console.log(slug);
		const response = await fetch(`${base}/documents/${slug}.json`).then((r) => r.json());
		return {
			props: {
				post: response
			}
		};
	};
</script>

<script lang="ts">
	export let post: PostType;
</script>

<svelte:head>
	<title>{post.data.title} - storeapp docs</title>
</svelte:head>
<div class="docs-container">
	<h1 id="title">{post.data.title}</h1>
	<div class="docs-data">
		<span
			>{@html post.html
				.replace(/&lt;/g, '<')
				.replace(/&gt;/g, '>')
				.replace(/&amp;/g, '&')
				.replace(/&quot;/g, '\\"')}</span
		>
	</div>
</div>

<style lang="scss">
	.docs-data {
		overflow: auto;
	}
	.docs-container {
		overflow: auto;

		padding: 1rem;
		width: 60%;
		margin: 50px auto;
		#title {
			font-size: 2.35rem;
			margin-bottom: 1.1rem;
		}
	}
</style>
