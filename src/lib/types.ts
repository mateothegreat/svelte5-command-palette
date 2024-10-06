import type { Snippet } from "svelte";

export interface CommandoRootProps {
	id: string;
	children?: Snippet;
	onclose?: () => void;
}

export interface CommandoBaseProps {
	children?: Snippet;
}

export interface CommandoSectionProps extends CommandoBaseProps {
	title?: string;
}
