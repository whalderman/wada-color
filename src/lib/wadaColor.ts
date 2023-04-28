import type { Color } from './colors';

export class WadaColor {
	static byName: Map<string, WadaColor> = new Map();

	color: Color;
	constructor(color: Color) {
		this.color = color;
		WadaColor.byName.set(color.name, this);
	}

	copyHexToClipboard = async () => {
		console.log('copying', this.color.hex, 'to clipboard');
		await navigator.clipboard.writeText(this.color.hex);
	};
}
