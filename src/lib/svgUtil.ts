export function textLetterSpacing(
	charCount: number,
	fontSize: number,
	textWidth: number
) {
	const spacing = (textWidth - fontSize * charCount) / (charCount - 1);
	if (spacing < 0) {
		return 0;
	}
	return spacing;
}
