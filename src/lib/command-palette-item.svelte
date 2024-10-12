<script lang="ts">
	import type { CommandPaletteBaseProps } from "./types";

	type CommandoItemProps = {
		selected: () => void;
	} & CommandPaletteBaseProps;

	let { children, selected }: CommandoItemProps = $props();
</script>

{@render children()}
