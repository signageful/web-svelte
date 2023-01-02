<script lang="ts">
	import { page } from '$app/stores';
    import { scale } from 'svelte/transition';
	import type { MenuItem } from './menu.types';

    export let item: MenuItem;

    let itemRef: HTMLElement;
    let isShown = false;

    const handleOutsideClick = (event: MouseEvent) => {
        if (!isShown) return;

        if (itemRef && !itemRef.contains(event.target as Node)) {
            isShown = false;
        }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            isShown = false;
        }
    };

    const handleClick = () => {
        isShown = !isShown;
    };
</script>
<svelte:window on:click={handleOutsideClick} on:keyup={handleEscapePress} />


<li bind:this={itemRef} class="group">
   {#if item.children}
        <button
            on:click={handleClick}
            class="nav-item {isShown ? 'text-primary-200' : ''} {$page.url.pathname.startsWith(item.href) ? 'text-primary-200': ''}"
        >
            <span class="md:flex md:h-full group items-center hover:text-primary-200">
                <span>{item.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" class="ml-2 text-current"><polygon fill="currentColor" points="4.448 1.248 3.6 .4 0 4 3.6 7.6 4.448 6.752 1.696 4" transform="matrix(0 -1 -1 0 8.4 4.4)"></polygon></svg>
            </span>
        </button>
        {#if isShown}
            <div
                in:scale={{ duration: 100, start: 0.95 }}
                out:scale={{ duration: 75, start: 0.95 }}
                class="sub-nav-item grid gap-1"
            >
                {#each item.children as child }
                    <a href={child.href}>
                        <div class="md:w-[14rem]">
                            <span
                                class="block font-mono text-base text-black font-bold"
                            >
                                {child.title}
                            </span>
                            {#if child.description}
                                <p class="font-mono text-xs text-slate-700">
                                    {child.description}
                                </p>
                            {/if}
                        </div>
                    </a>
                {/each}
            </div>
        {/if}
    {:else}
        <a href={item.href} class="nav-item" >
            <span class="md:flex md:h-full items-center group-hover:text-primary-200 {$page.url.pathname.startsWith(item.href) ? 'text-primary-200': ''}">
                {item.title}
            </span>
        </a>
   {/if}
</li>