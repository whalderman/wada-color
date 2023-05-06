<script lang="ts">
	import type { WadaPalette } from '$lib/wadaPalette';
	import FourColorPalette from './FourColorPalette.svelte';
	import ThreeColorPalette from './ThreeColorPalette.svelte';
	import TwoColorPalette from './TwoColorPalette.svelte';

	export let paletteIndex: number;
	export let palette: WadaPalette;

	const PaletteMap = new Map([
		[2, TwoColorPalette],
		[3, ThreeColorPalette],
		[4, FourColorPalette],
	]);

	const PaletteComponent = PaletteMap.get(palette.length);
</script>

<div
	class:two-color={palette.length === 2}
	class:three-color={palette.length === 3}
	class:four-color={palette.length === 4}
>
	<PaletteComponent colors={palette} {paletteIndex} />
</div>

<style>
	:global(svg) {
		shape-rendering: optimizeSpeed;
		text-rendering: optimizeSpeed;
	}
	:global(rect[fill='#ffffff']) {
		stroke: #000;
		stroke-width: 0.1;
		vector-effect: non-scaling-stroke;
	}

	.two-color {
		flex: 1 1 24rem;
	}
	.three-color {
		flex: 1 1 30rem;
	}
	.four-color {
		flex: 1 1 40rem;
	}
</style>
