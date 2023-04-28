<script lang="ts">
	import type { WadaColor } from '$lib/wadaColor';

	export let colors: WadaColor[];
	if (colors.length !== 3) {
		throw new Error(
			'ThreeColorPalette requires 3 colors, got ' + colors.length
		);
	}
	const [c1, c2, c3] = colors;

	export let baseUnit: number;
	/** base unit */
	const u = baseUnit;
	const svgWidth = u * 3;
	const svgHeight = u;
	const outlineOffset = 1.5;
	/** outline offset */
	const oo = outlineOffset;

	const outlinePoints = [
		// x1 y1
		[-oo, -oo],
		// x2 y2
		[svgWidth + oo, -oo],
		// x3 y3
		[svgWidth + oo, svgHeight + oo],
		// x4 y4
		[-oo, svgHeight + oo],
	]
		.map(([x, y]) => `${x},${y}`)
		.join(' ');
</script>

<svg
	viewBox="-{oo * 2} -{oo * 2} {svgWidth + oo * 2 * 2} {svgHeight + oo * 2 * 2}"
>
	<g>
		<!-- outline the g -->
		<polygon points={outlinePoints} />
		<rect
			x={0}
			fill={c1.color.hex}
			on:click|preventDefault={c1.copyHexToClipboard}
			width={u}
			height={u}
		/>
		<rect
			x={u}
			fill={c2.color.hex}
			on:click|preventDefault={c2.copyHexToClipboard}
			width={u}
			height={u}
		/>
		<rect
			x={u * 2}
			fill={c3.color.hex}
			on:click|preventDefault={c3.copyHexToClipboard}
			width={u}
			height={u}
		/>
	</g>
</svg>

<style>
	polygon {
		stroke: #4f4f4f;
		stroke-linejoin: round;
		vector-effect: non-scaling-stroke;
		fill-opacity: 0;
	}
</style>
