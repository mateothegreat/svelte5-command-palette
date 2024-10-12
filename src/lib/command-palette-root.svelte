<script lang="ts">
	import { closeCommandPalette } from "./command-palette";
	import CommandoFavorites from "./command-palette-favorites.svelte";
	import CommandoFooter from "./command-palette-footer.svelte";
	import CommandoInput from "./command-palette-input.svelte";
	import type { CommandPaletteRootProps } from "./types";

	let { children, id, onsearch, onclose }: CommandPaletteRootProps = $props();
	let ref: HTMLElement;

	const handleClick = (e: MouseEvent) => {
		const target = e.target as Node;
		console.log(target);
		console.log(ref);
		if (ref === target) {
			console.log("closing");
			closeCommandPalette();
		}
	};
</script>

<div bind:this={ref} onclick={handleClick} role="dialog" aria-modal="true" class="modal-overlay absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-500">
	<div class="divide-y divide-gray-500 divide-opacity-30 mx-auto text-slate-500 text-sm ring-2 bg-black w-[80%] max-w-[800px] overflow-hidden rounded-xl shadow-2xl transition-all duration-500">
		<CommandoInput {onsearch} />
		{@render children()}
		<CommandoFavorites />
		<CommandoFooter />
	</div>
</div>
