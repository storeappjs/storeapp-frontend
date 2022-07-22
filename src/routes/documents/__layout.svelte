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
	let pathname = '';
	if (typeof document !== 'undefined') {
		pathname = window.location.pathname;
	}
</script>

<div class="documents-wrapper">
	<div class="documents-list">
		<div class="logo">
			<a href="/">storeappjs</a>
		</div>
		<div class="logo-inner" />
		{#each posts as tag}
			<div class="document-tag">
				{Object.keys(tag).toString().charAt(0).toUpperCase() + Object.keys(tag).toString().slice(1)}
			</div>
			{#each Object.values(tag)[0] as post, i}
				<div class="document-item">
					<a
						href={`/documents/${Object.keys(tag).toString().replace('overview', '')}${String(
							post
						).replace(/ /g, '-')}`}
						class={`/documents/${Object.keys(tag).toString().replace('overview', '')}${String(
							post
						).replace(/ /g, '-')}`.includes(pathname)
							? 'active'
							: ''}
						><button
							class="item-btn"
							on:click={() =>
								(pathname = `/documents/${Object.keys(tag)
									.toString()
									.replace('overview', '')}${String(post).replace(/ /g, '-')}`)}
						>
							{String(post).replace('/', '')}
						</button></a
					>
				</div>
			{/each}
			<div class="bottom-border"><div class="inner" /></div>
		{/each}
	</div>
	<div class="documents-content">
		<slot />
	</div>
</div>

<style lang="scss">
	.active button {
		color: rgb(47, 101, 218) !important;
		transition: all ease 0.1s 0s;
	}
	.bottom-border {
		padding-left: 2.2rem;
		padding-right: 2.2rem;
		.inner {
			margin-top: 1rem;
			border-top: 1px solid rgba(173, 173, 173, 0.26);
		}
	}
	.logo {
		width: 100%;
		padding: 0;
		padding-bottom: 0.1rem;
		margin-bottom: 1rem;
		a {
			color: #000;
		}
	}
	.logo-inner {
		border-bottom: 1px solid rgba(173, 173, 173, 0.26);
	}
	.item-btn {
		text-align: left;
		border: none;
		box-shadow: none;
		margin: 0;
		padding: 0;
		width: 100%;
		background-color: inherit;
	}
	.item-btn {
		transition: all ease 0.1s 0s;
		color: #696969;
	}
	.item-btn:hover {
		transition: all ease 0.1s 0s;
		color: #000;
	}
	.documents-content {
		width: 100%;
		font-size: 0.95rem;
		overflow: auto;
		height: 100vh;
	}
	.documents-wrapper {
		.logo {
			padding-top: 1rem;
		}
		display: flex;
		.documents-list {
			background-color: rgba(231, 231, 231, 0.349);
			overflow: scroll;
			position: sticky;
			height: 100vh;
			width: 23%;
			font-weight: bold;
			overflow: hidden;
			a {
				padding-left: 2.2rem;
				padding-right: 2.2rem;
				min-width: 100%;
				text-decoration: none;
			}
			.document-tag {
				padding-left: 2.2rem;
				padding-right: 2.2rem;
				padding-top: 1rem;
				padding-bottom: 0.1rem;
				font-size: 0.8rem;
				color: rgba(20, 20, 20, 0.664);
			}
			.document-item {
				padding-top: 0.2rem;
				font-size: 0.9rem;
			}
		}
	}
</style>
