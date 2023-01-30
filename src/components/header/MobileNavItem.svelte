<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { MenuItem } from './menu.types';
    import { trackLink } from 'svelte-segment-events';
	export let item: MenuItem;

    let isOpen = false
	const toggle = () => isOpen = !isOpen
</script>

{#if item.children}
<div>
    <button on:click={toggle} aria-expanded={isOpen} class="block font-sans text-black text-2xl leading-10 font-medium no-underline">
        {item.title}
    </button>
    {#if isOpen}
    <div transition:slide={{ duration: 300 }}>
        <div class="space-y-2 ml-2 mt-4">
            {#each item.children as child}
            <a use:trackLink="{{ event: `Navigated to ${child.title}` }}" class="block font-sans text-slate-700 text-base font-normal no-underline py-1"
                href="{child.href}"
            >
                {child.title}
            </a>
            {/each}
        </div>
    </div>
    {/if}
</div>
{:else}
    <a class="block font-sans text-black text-2xl leading-10 font-medium no-underline"
        href="{item.href}"
    >
        {item.title}
    </a>
{/if}