<script lang="ts">
	import type { WadaColor } from '$lib/wadaColor';

	export let colors: WadaColor[];
	if (colors.length !== 2) {
		throw new Error('TwoColorPalette requires 2 colors, got ' + colors.length);
	}
	const [c1, c2] = colors;

	export let baseUnit: number;
	/** base unit */
	const u = baseUnit;
	const rectWidth = u;
	const rectHeight = u;
	const svgWidth = rectWidth * 2;
	const svgHeight = rectHeight;
	const outlineOffset = 1;
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
			width={rectWidth}
			height={u}
		/>
		<rect
			x={rectWidth}
			fill={c2.color.hex}
			on:click|preventDefault={c2.copyHexToClipboard}
			width={rectWidth}
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
