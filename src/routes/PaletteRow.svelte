<script lang="ts">
	import type { WadaPalette } from '$lib/wadaPalette';
	import FourColorPalette from './FourColorPalette.svelte';
	import ThreeColorPalette from './ThreeColorPalette.svelte';
	import TwoColorPalette from './TwoColorPalette.svelte';

	export let index: number;
	export let palette: WadaPalette;

	const PaletteMap = new Map([
		[2, TwoColorPalette],
		[3, ThreeColorPalette],
		[4, FourColorPalette],
	]);

	const PaletteComponent = PaletteMap.get(palette.colors.length);

	/** base unit */
	let u = 15;
</script>

<PaletteComponent colors={palette.colors} baseUnit={u} />
