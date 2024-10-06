<script lang="ts">
	import type { CommandoBaseProps } from "./types";

	type CommandoItemProps = {
		selected: () => void;
	} & CommandoBaseProps;

	let { children, selected }: CommandoItemProps = $props();
</script>

<div class="hover:bg-white/10" on:click={selected}>
	{@render children()}
</div>
