<script lang="ts">
	import { textLetterSpacing } from '$lib/svgUtil';
	import type { WadaColor } from '$lib/wadaColor';

	export let paletteIndex: number;
	export let colors: WadaColor[];
	if (colors.length !== 4) {
		throw new Error('FourColorPalette requires 4 colors, got ' + colors.length);
	}
	const [c1, c2, c3, c4] = colors;

	const baseUnit = 30;
	/** base unit shorthand, color square side length */
	const u = baseUnit;
	const paletteWidth = u * 4;
	const paletteHeight = u * 3;
	const outlineOffset = 3;
	/** outline offset */
	const oo = outlineOffset;

	const textWidth = u - oo;

	// the text for each color is placed clockwise relative to the color
	const textColor1NameMiddleAnchorX = u * 3.5 + oo;
	const textColor1NameMiddleAnchorY = u / 2 - oo;

	const textColor2NameMiddleAnchorX = u / 2 - oo;
	const textColor2NameMiddleAnchorY = textColor1NameMiddleAnchorY;

	const textColor3NameMiddleAnchorX = textColor1NameMiddleAnchorX;
	const textColor3NameMiddleAnchorY = u * 2.5;

	const textColor4NameMiddleAnchorX = textColor2NameMiddleAnchorX;
	const textColor4NameMiddleAnchorY = textColor3NameMiddleAnchorY;

	const textFontSize = 4;
	const hexFontSize = 2.5;

	const outlinePoints = [
		// x1 y1 - starting at top left, moving clockwise
		[u - oo, -oo],
		// x2 y2
		[u + u * 2 + oo, -oo],
		// x3 y3
		[u + u * 2 + oo, u - oo],
		// x4 y4
		[paletteWidth + oo, u - oo],
		// x5 y5
		[paletteWidth + oo, u * 2 + oo],
		// x6 y6
		[u + u * 2 + oo, u * 2 + oo],
		// x7 y7
		[u + u * 2 + oo, paletteHeight + oo],
		// x8 y8
		[u - oo, paletteHeight + oo],
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

	const svgX = -oo * 2;
	const svgY = -oo * 2 - textFontSize;
	const svgWidth = paletteWidth + oo * 2 * 2;
	const svgHeight = paletteHeight + Math.abs(svgY) + oo * 2 * 2;
</script>

<svg viewBox="{svgX} {svgY} {svgWidth} {svgHeight}">
	<text x={u * 2} y={-oo * 2} font-size={textFontSize}
		>（ {paletteIndex} ）</text
	>
	<polygon points={outlinePoints} />
	<rect
		fill={c1.color.hex}
		on:click|preventDefault={c1.copyHexToClipboard}
		x={u}
		width={u * 2}
		height={u}
	/>
	<text class="hex" x={u * 2} y={-0.5} font-size={hexFontSize}>
		{c1.color.hex}
	</text>
	<text
		class="placement"
		x={textColor1NameMiddleAnchorX}
		y={textColor1NameMiddleAnchorY - textFontSize * 1.1}
		font-size={textFontSize * 0.75}
	>
		<title>top color</title>
		上
	</text>
	<text
		class="furigana"
		x={textColor1NameMiddleAnchorX}
		y={textColor1NameMiddleAnchorY}
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
		y={textColor1NameMiddleAnchorY + textFontSize * 1.1}
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
		y={textColor1NameMiddleAnchorY + textFontSize * 2.2}
		font-size={textFontSize * 0.75}
	>
		{c1.color.enName}
	</text>
	<rect
		fill={c2.color.hex}
		on:click|preventDefault={c2.copyHexToClipboard}
		y={u}
		width={u * 2}
		height={u}
	/>
	<text class="hex side" x={-oo * 0.5} y={u * 1.5} font-size={hexFontSize}>
		{c2.color.hex}
	</text>
	<text
		class="placement"
		x={textColor2NameMiddleAnchorX}
		y={textColor2NameMiddleAnchorY - textFontSize * 1.1}
		font-size={textFontSize * 0.75}
	>
		<title>left color</title>
		左
	</text>
	<text
		class="furigana"
		x={textColor2NameMiddleAnchorX}
		y={textColor2NameMiddleAnchorY}
		font-size={textFontSize * 0.75}
		letter-spacing={textLetterSpacing(
			c2.color.furigana.length,
			textFontSize * 0.75,
			textWidth
		)}
	>
		{c2.color.furigana.slice(0, -1)}
		<tspan letter-spacing={0}>{c2.color.furigana.slice(-1)}</tspan>
	</text>
	<text
		class="kanji"
		x={textColor2NameMiddleAnchorX}
		y={textColor2NameMiddleAnchorY + textFontSize * 1.1}
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
		y={textColor2NameMiddleAnchorY + textFontSize * 2.2}
		font-size={textFontSize * 0.75}
	>
		{c2.color.enName}
	</text>

	<rect
		fill={c3.color.hex}
		on:click|preventDefault={c3.copyHexToClipboard}
		x={u * 2}
		y={u}
		width={u * 2}
		height={u}
	/>
	<text
		class="hex side"
		x={u * 4 + oo * 0.5}
		y={u * 1.5}
		font-size={hexFontSize}
	>
		{c3.color.hex}
	</text>
	<text
		class="placement"
		x={textColor3NameMiddleAnchorX}
		y={textColor3NameMiddleAnchorY - textFontSize * 1.1}
		font-size={textFontSize * 0.75}
	>
		<title>right color</title>
		右
	</text>
	<text
		class="furigana"
		x={textColor3NameMiddleAnchorX}
		y={textColor3NameMiddleAnchorY}
		font-size={textFontSize * 0.75}
		letter-spacing={textLetterSpacing(
			c3.color.furigana.length,
			textFontSize * 0.75,
			textWidth
		)}
	>
		{c3.color.furigana.slice(0, -1)}
		<tspan letter-spacing={0}>{c3.color.furigana.slice(-1)}</tspan>
	</text>
	<text
		class="kanji"
		x={textColor3NameMiddleAnchorX}
		y={textColor3NameMiddleAnchorY + textFontSize * 1.1}
		font-size={textFontSize}
		letter-spacing={textLetterSpacing(
			c3.color.name.length,
			textFontSize,
			textWidth
		)}
	>
		{c3.color.name.slice(0, -1)}
		<tspan letter-spacing={0}>{c3.color.name.slice(-1)}</tspan>
	</text>
	<text
		class="english"
		x={textColor3NameMiddleAnchorX}
		y={textColor3NameMiddleAnchorY + textFontSize * 2.2}
		font-size={textFontSize * 0.75}
	>
		{c3.color.enName}
	</text>

	<rect
		fill={c4.color.hex}
		on:click|preventDefault={c4.copyHexToClipboard}
		x={u}
		y={u * 2}
		width={u * 2}
		height={u}
	/>
	<text class="hex" x={u * 2} y={u * 3 + oo - 0.5} font-size={hexFontSize}>
		{c4.color.hex}
	</text>
	<text
		class="placement"
		x={textColor4NameMiddleAnchorX}
		y={textColor4NameMiddleAnchorY - textFontSize * 1.1}
		font-size={textFontSize * 0.75}
	>
		<title>bottom color</title>
		下
	</text>
	<text
		class="furigana"
		x={textColor4NameMiddleAnchorX}
		y={textColor4NameMiddleAnchorY}
		font-size={textFontSize * 0.75}
		letter-spacing={textLetterSpacing(
			c4.color.furigana.length,
			textFontSize * 0.75,
			textWidth
		)}
	>
		{c4.color.furigana.slice(0, -1)}
		<tspan letter-spacing={0}>{c4.color.furigana.slice(-1)}</tspan>
	</text>
	<text
		class="kanji"
		x={textColor4NameMiddleAnchorX}
		y={textColor4NameMiddleAnchorY + textFontSize * 1.1}
		font-size={textFontSize}
		letter-spacing={textLetterSpacing(
			c4.color.name.length,
			textFontSize,
			textWidth
		)}
	>
		{c4.color.name.slice(0, -1)}
		<tspan letter-spacing={0}>{c4.color.name.slice(-1)}</tspan>
	</text>
	<text
		class="english"
		x={textColor4NameMiddleAnchorX}
		y={textColor4NameMiddleAnchorY + textFontSize * 2.2}
		font-size={textFontSize * 0.75}
	>
		{c4.color.enName}
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

	text.placement,
	text.furigana,
	text.kanji,
	text.english {
		font-family: serif;
	}

	text.hex {
		font-family: monospace;
		fill: #aaa;
	}
	text.hex.side {
		writing-mode: vertical-lr;
		text-orientation: upright;
	}
</style>
