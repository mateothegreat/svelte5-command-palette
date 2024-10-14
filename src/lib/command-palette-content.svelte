<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
    onsearch?: (value: string) => void;
    class?: string;
  };

  let { children, onsearch, class: className }: Props = $props();
</script>

<div class="mx-auto h-full w-full divide-y divide-gray-800 bg-black text-sm text-slate-500 transition-all duration-500 {className}">
  {@render children()}
</div>
