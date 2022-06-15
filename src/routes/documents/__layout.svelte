<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { base } from '$app/paths';

	export const load: Load = async ({ params, fetch }) => {
		const response = await fetch(`${base}/documents/list.json`).then((r) => r.json());
		return {
			props: {
				posts: response
			}
		};
	};
</script>

<script lang="ts">
	import '../../app.scss';
	export let posts: any;
</script>

<div class="documents-wrapper">
	<div class="documents-list">
		<div class="logo">
			<a href="/">storeappjs</a>
		</div>
		{#each posts as tag}
			<div class="document-tag">
				{Object.keys(tag).toString().toUpperCase()}
			</div>
			{#each Object.values(tag)[0] as post, i}
				<div class="document-item">
					<a
						href={`/documents/${Object.keys(tag).toString().replace('overview', '')}${String(
							post
						).replace(/ /g, '-')}`}
					>
						{String(post).replace('/', '')}
					</a>
				</div>
			{/each}
		{/each}
	</div>
	<div class="documents-content">
		<slot />
	</div>
</div>

<style lang="scss">
	.documents-content {
		width: 100%;
		font-size: 0.95rem;
		overflow: auto;
		height: 100vh;
	}
	.documents-wrapper {
		.logo {
			padding-top: 1rem;
			padding-left: 1.3rem;
		}
		display: flex;
		.documents-list {
			overflow: scroll;
			position: sticky;
			a {
				min-width: 100%;
				color: #000;
				text-decoration: none;
			}
			height: 100vh;
			width: 20%;
			font-weight: bold;
			overflow: hidden;
			border-right: 2px solid #e7e7e7;
			.document-tag {
				padding-top: 1rem;
				padding-left: 1.3rem;
				font-size: 0.75rem;
				color: rgb(129, 129, 129);
			}
			.document-item {
				color: rgb(51, 51, 51);
				padding-top: 0.2rem;
				padding-left: 1.3rem;
				font-size: 0.9rem;
			}
		}
	}
</style>
