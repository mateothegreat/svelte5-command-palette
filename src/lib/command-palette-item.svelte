<script lang="ts">
	import type { CommandPaletteBaseProps } from "./types";

	type CommandoItemProps = {
		selected: () => void;
	} & CommandPaletteBaseProps;

	let { children, selected }: CommandoItemProps = $props();
</script>

<div class="hover:bg-white/10" on:click={selected}>
	{@render children()}
</div>
