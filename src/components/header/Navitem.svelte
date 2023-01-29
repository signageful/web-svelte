<script lang="ts">
    import { NavLi, Chevron, Dropdown, DropdownItem } from 'flowbite-svelte'
    import { navigating } from '$app/stores';
	import { page } from '$app/stores';
	import type { MenuItem } from './menu.types';
	export let item: MenuItem;

    let isOpen = false;

   

    $: if ($navigating) {
		isOpen = false;
	}
</script>

<NavLi
    href={item.href}
    active={$page.url.pathname.startsWith(item.href)}
>
    {#if item.children}
        <Chevron aligned>
            {item.title}
        </Chevron>
    {:else}
        {item.title}
    {/if}
</NavLi>

{#if item.children}
    <Dropdown class="w-44 z-20">
        {#each item.children as child}
            <DropdownItem href={child.href}>
                {child.title}
            </DropdownItem>
        {/each}
    </Dropdown>
{/if}
    
