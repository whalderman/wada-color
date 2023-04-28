<script lang="ts">
	import type { WadaColor } from '$lib/wadaColor';

	export let colors: WadaColor[];
	if (colors.length !== 4) {
		throw new Error('FourColorPalette requires 4 colors, got ' + colors.length);
	}
	const [c1, c2, c3, c4] = colors;

	export let baseUnit: number;
	/** base unit */
	const u = baseUnit;
	const svgWidth = u * 4;
	const svgHeight = u * 3;
	const outlineOffset = 2;
	/** outline offset */
	const oo = outlineOffset;

	const outlinePoints = [
		// x1 y1
		[u - oo, -oo],
		// x2 y2
		[u + u * 2 + oo, -oo],
		// x3 y3
		[u + u * 2 + oo, u - oo],
		// x4 y4
		[svgWidth + oo, u - oo],
		// x5 y5
		[svgWidth + oo, u * 2 + oo],
		// x6 y6
		[u + u * 2 + oo, u * 2 + oo],
		// x7 y7
		[u + u * 2 + oo, svgHeight + oo],
		// x8 y8
		[u - oo, svgHeight + oo],
		// x9 y9
		[u - oo, u * 2 + oo],
		// x10 y10
		[-oo, u * 2 + oo],
		// x11 y11
		[-oo, u - oo],
		// x12 y12
		[u - oo, u - oo],
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
			fill={c1.color.hex}
			on:click|preventDefault={c1.copyHexToClipboard}
			x={u}
			width={u * 2}
			height={u}
		/>
		<rect
			fill={c2.color.hex}
			on:click|preventDefault={c2.copyHexToClipboard}
			y={u}
			width={u * 2}
			height={u}
		/>
		<rect
			fill={c3.color.hex}
			on:click|preventDefault={c3.copyHexToClipboard}
			x={u * 2}
			y={u}
			width={u * 2}
			height={u}
		/>
		<rect
			fill={c4.color.hex}
			on:click|preventDefault={c4.copyHexToClipboard}
			x={u}
			y={u * 2}
			width={u * 2}
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
