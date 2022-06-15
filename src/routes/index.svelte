<script lang="ts">
	import '../app.scss';

	async function delay(ms: number) {
		return await new Promise((resolve) => setTimeout(resolve, ms));
	}
	let terminalText = '';
	const terminalConfig = {
		prompt: '~root ',
		command: [
			[
				'storeapp install awesome-app',
				[
					'downloading awesome-app',
					'awesome-app downloaded successfully',
					'Running build script for awesome-app',
					'',
					'> storeapp run awesome-app',
					''
				]
			],
			[
				'storeapp run awesome-app',
				[
					'Running awesome-app@0.0.0',
					'',
					'see documents!',
					'<a href="https://storeappjs.netlify.app/documents/intro"https://storeappjs.netlify.app/documents/intro</a>',
					''
				]
			]
		]
	};

	terminalText += `<span class="prompt">${terminalConfig.prompt}</span>`;
	async function next(i: number) {
		const e = terminalConfig.command[i];
		if (!e) return;
		if (typeof window !== 'undefined') {
			for (let index = 0; index < e[0].length; index++) {
				if (index < e[0].indexOf(' '))
					terminalText += `<span class="command">${e[0][index]}</span>`;
				else terminalText += e[0][index];
				await delay(80);
			}
			for (let index = 0; index < e[1].length; index++) {
				await delay(300);
				terminalText += `<br/><span class="output">${e[1][index]}</span>`;
			}
			terminalText += `<br><span class="prompt">${terminalConfig.prompt}</span>`;
			await delay(300);
			next(i + 1);
		}
	}
	next(0);
</script>

<div class="main-container">
	<div class="main">
		<div class="introduce">
			<h1>
				<p>the <span class="highlight">OpenSource</span></p>
				<p>application store</p>
			</h1>
			<p class="description">
				storeapp is a <span class="highlight-2">node application</span> downloader
			</p>
			<div>
				<button on:click={() => (window.location.href = '/store')}>browse application</button>
				<button on:click={() => (window.location.href = '/documents/intro')}>Documentation</button>
			</div>
		</div>
		<div class="terminal code">
			<div class="terminal-top">
				<div class="circle" style="background-color: #eb4949" />
				<div class="circle" style="background-color: #fadc3e" />
				<div class="circle" style="background-color: #1eb355" />
			</div>
			{@html terminalText}
		</div>
	</div>
</div>

<style lang="scss">
	button {
		margin-top: 20px;
		margin-right: 5px;
	}
	.main-container {
		width: 100%;
		background-color: #eceff4;
	}
	.main {
		display: flex;
		width: 80%;
		height: 100vh;
		margin: 0 auto;

		h1 {
			margin-top: 130px;
			color: #000000;
			font-size: 2.75rem;
			p {
				margin: 0;
			}
			.highlight {
				color: var(--primary);
			}
		}
		.description {
			font-size: 0.995rem;
			color: #4b4b4b;
		}
		.highlight-2 {
			color: var(--secondary);
		}
		.terminal {
			.terminal-top {
				height: 20px;
				display: flex;
			}
			.circle {
				width: 10px;
				height: 10px;
				border-radius: 999px;
				margin-right: 7px;
			}
			margin-top: 75px;
			margin-left: 145px;
			width: 50%;
			height: 300px;
			background-color: #2e3440;
			color: #eceff4;
			border-radius: 15px;
			padding: 15px 20px;
		}
	}
</style>
