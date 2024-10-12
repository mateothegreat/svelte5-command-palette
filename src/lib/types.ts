import type { Snippet } from "svelte";

export interface CommandPaletteRootProps {
	id: string;
	children?: Snippet;
	onclose?: () => void;
	onsearch?: (value: string) => void;
}

export interface CommandPaletteBaseProps {
	children?: Snippet;
}

export interface CommandPaletteSectionProps extends CommandPaletteBaseProps {
	title?: string;
}
