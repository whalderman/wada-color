<script lang="ts">
	import { wadaPalettesByNum } from '$lib/wadaPalette';
	import PaletteRow from './PaletteRow.svelte';
</script>

<h1>Wada Color</h1>
<p>Click a color to copy the hex.</p>
<div id="palettes">
	{#each wadaPalettesByNum as [paletteIndex, palette]}
		<PaletteRow {paletteIndex} {palette} />
	{/each}
</div>

<style>
	#palettes {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 1rem;
	}

	h1 {
		width: 100%;
		text-align: center;
	}

	p {
		width: 100%;
		text-align: center;
	}
</style>
