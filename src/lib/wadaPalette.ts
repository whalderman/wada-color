import colors from './colors';
import { WadaColor } from './wadaColor';

export class WadaPalette {
	static byIndex: Map<number, WadaPalette> = new Map();
	static addColorToPalette(index: number, color: WadaColor) {
		const existingPalette = WadaPalette.byIndex.get(index);
		if (existingPalette) {
			existingPalette.colors.push(color);
		} else {
			const newPalette = new WadaPalette();
			newPalette.colors.push(color);
			WadaPalette.byIndex.set(index, newPalette);
		}
	}

	colors: WadaColor[] = [];
}

for (const color of colors) {
	const wada = new WadaColor(color);
	for (const index of color.combinations) {
		WadaPalette.addColorToPalette(index, wada);
	}
}
