<script lang="ts">
	import Logo from './logo/Logo.svelte';
import type { MenuItem } from './menu.types';
    import Navitem from './Navitem.svelte';

    const items: MenuItem[] = [
        {
            title: "Lösungen",
            href: "/solutions",
            children: [
                {
                    title: 'Schule & Bildung',
                    href: '/solutions/schools',
                },
                {
                    title: "Arztpraxis",
                    href: "/solutions/doctor",
                },
                {
                    title: "Hotel & Gastronomie",
                    href: "/solutions/hotel",
                }
            ],
        },
    ];

    let navRef: HTMLElement;

    const handleScroll = () => {
        document.documentElement.scrollTop > 96
            ? navRef.classList.remove("at-top")
            : document.documentElement.scrollTop < 64 && navRef.classList.add("at-top");
    }
</script>
<svelte:window on:scroll={handleScroll} />
<nav bind:this={navRef}  id="top-nav" class="print:hidden w-full px-4 z-50 at-top bg-primary-600">
    <div class="max-w-6xl 2xl:max-w-8xl flex items-center justify-between mx-auto print:hidden relative">
        <div class="flex flex-row">
            <a id="logo" class="logo" href="/">
                <Logo />
            </a>
            <div class="ml-1 flex flex-row items-center">
                <div class="h-[24px] w-[3px]">
                    <span class="bg-[#FF0000] h-1/3 w-full block" />
                    <span class="bg-black  h-1/3 w-full block" />
                    <span class="bg-[#FFCC00]  h-1/3 w-full block" />
                </div>
                <span class="uppercase text-xs ml-2">
                    made & hosted
                    <br />
                    in germany
                </span>
            </div>
        </div>
        <div class="md:flex links px-4 md:px-0 pb-8 md:pb-0 print:hidden h-full">
            <ul class="list-none font-mono text-blue-darkest font-bold text-sm flex md:items-center space-y-2 md:space-y-0">
                {#each items as item}
                    <Navitem item={item} />
                {/each}
            </ul>
        </div>
    </div>
</nav>