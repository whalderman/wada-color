<script lang="ts">
	import { textLetterSpacing } from '$lib/svgUtil';
	import type { WadaColor } from '$lib/wadaColor';

	export let paletteIndex: number;
	export let colors: WadaColor[];
	if (colors.length !== 2) {
		throw new Error('TwoColorPalette requires 2 colors, got ' + colors.length);
	}
	const [c1, c2] = colors;

	const baseUnit = 30;
	/** base unit shorthand, color square side length */
	const u = baseUnit;
	const paletteWidth = u * 2;
	const paletteHeight = u;
	const outlineOffset = 3;
	/** outline offset */
	const oo = outlineOffset;

	const textWidth = u - oo * 4;
	const textColor1NameMiddleAnchorX = u / 2;
	const textColor2NameMiddleAnchorX = u + textColor1NameMiddleAnchorX;
	const textColorNameY = u + oo * 3;

	const textFontSize = 2.5;

	const outlinePoints = [
		// x1 y1
		[-oo, -oo],
		// x2 y2
		[paletteWidth + oo, -oo],
		// x3 y3
		[paletteWidth + oo, paletteHeight + oo],
		// x4 y4
		[-oo, paletteHeight + oo],
	]
		.map(([x, y]) => `${x},${y}`)
		.join(' ');

	const svgX = -oo * 2;
	const svgY = -oo * 2 - textFontSize;
	const svgWidth = paletteWidth + oo * 2 * 2;
	const svgHeight =
		paletteHeight + Math.abs(svgY) + oo * 2 * 2 + textFontSize + oo;
</script>

<svg viewBox="{svgX} {svgY} {svgWidth} {svgHeight}">
	<text x={u} y={-oo * 2} font-size={textFontSize}>（ {paletteIndex} ）</text>
	<polygon points={outlinePoints} />
	<rect
		x={0}
		fill={c1.color.hex}
		on:click|preventDefault={c1.copyHexToClipboard}
		width={u}
		height={u}
	/>
	<text
		class="hex"
		x={textColor1NameMiddleAnchorX}
		y={u + textFontSize}
		font-size={textFontSize}
	>
		{c1.color.hex}
	</text>
	<text
		class="furigana"
		x={textColor1NameMiddleAnchorX}
		y={textColorNameY}
		font-size={textFontSize * 0.75}
		letter-spacing={textLetterSpacing(
			c1.color.furigana.length,
			textFontSize * 0.75,
			textWidth
		)}
	>
		{c1.color.furigana.slice(0, -1)}
		<tspan letter-spacing={0}>{c1.color.furigana.slice(-1)}</tspan>
	</text>
	<text
		class="kanji"
		x={textColor1NameMiddleAnchorX}
		y={textColorNameY + textFontSize * 1.1}
		font-size={textFontSize}
		letter-spacing={textLetterSpacing(
			c1.color.name.length,
			textFontSize,
			textWidth
		)}
	>
		{c1.color.name.slice(0, -1)}
		<tspan letter-spacing={0}>{c1.color.name.slice(-1)}</tspan>
	</text>
	<text
		class="english"
		x={textColor1NameMiddleAnchorX}
		y={textColorNameY + textFontSize * 2.2}
		font-size={textFontSize * 0.75}
	>
		{c1.color.enName}
	</text>
	<rect
		x={u}
		fill={c2.color.hex}
		on:click|preventDefault={c2.copyHexToClipboard}
		width={u}
		height={u}
	/>
	<text
		class="hex"
		x={textColor2NameMiddleAnchorX}
		y={u + textFontSize}
		font-size={textFontSize}
	>
		{c2.color.hex}
	</text>
	<text
		x={textColor2NameMiddleAnchorX}
		y={textColorNameY}
		class="furigana"
		font-size={textFontSize * 0.75}
		letter-spacing={textLetterSpacing(
			c2.color.furigana.length,
			textFontSize * 0.75,
			textWidth
		)}
		>{c2.color.furigana.slice(0, -1)}
		<tspan letter-spacing={0}>{c2.color.furigana.slice(-1)}</tspan>
	</text>
	<text
		class="kanji"
		x={textColor2NameMiddleAnchorX}
		y={textColorNameY + textFontSize * 1.1}
		font-size={textFontSize}
		letter-spacing={textLetterSpacing(
			c2.color.name.length,
			textFontSize,
			textWidth
		)}
	>
		{c2.color.name.slice(0, -1)}
		<tspan letter-spacing={0}>{c2.color.name.slice(-1)}</tspan>
	</text>
	<text
		class="english"
		x={textColor2NameMiddleAnchorX}
		y={textColorNameY + textFontSize * 2.2}
		font-size={textFontSize * 0.75}
	>
		{c2.color.enName}
	</text>
</svg>

<style>
	polygon {
		stroke: #4f4f4f;
		stroke-linejoin: round;
		vector-effect: non-scaling-stroke;
		fill-opacity: 0;
	}

	rect {
		cursor: pointer;
	}

	rect:active + text {
		font-weight: bold;
		fill: #000;
	}

	text {
		font-weight: 100;
		text-anchor: middle;
	}

	text.furigana,
	text.kanji,
	text.english {
		font-family: serif;
	}

	text.hex {
		font-family: monospace;
		fill: #aaa;
	}
</style>
