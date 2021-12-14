<script lang="ts">
	const getSecretEnvironmentVariable = async () => {
		return await fetch('/api/test').then((res) => res.json());
	};
</script>

<main>
	<a href="https://github.com/nanderLP/sveltekit-ssr-env">repo</a>
	{#await getSecretEnvironmentVariable()}Loading...{:then data}{#if data.response}<span
				style={'color: limegreen'}
				>secret environment variable found! <code>{data.response}</code></span
			>{:else}<span style={'color: red'}>secret environment variable not found ☹️</span
			>{/if}{/await}
</main>

<style>
	a {
		margin-bottom: 1em;
	}

	main {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		margin-top: 20vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
