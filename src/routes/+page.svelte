<script lang="ts">
	import { WadaPalette } from '$lib/wadaPalette';
	import PaletteRow from './PaletteRow.svelte';

	const palettes = [...WadaPalette.byIndex.entries()].sort(
		(a, b) => a[0] - b[0]
	);
</script>

<h1>Wada Color</h1>
<p>Click a color to copy the hex.</p>
<div id="palettes">
	{#each palettes as [ii, palette]}
		<PaletteRow index={ii} {palette} />
	{/each}
</div>

<style>
	#palettes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-auto-rows: minmax(15rem, 1fr);
		gap: 0.5rem;
	}

	h1 {
		width: 100%;
		text-align: center;
	}

	p {
		width: 100%;
		text-align: center;
	}

	h2 {
		margin: 1.5rem 0 0 0;
	}
</style>
