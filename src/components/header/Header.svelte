<script lang="ts">
    import Logo from "../logo/Logo.svelte";
    import type { MenuItem } from './menu.types';
    import Navitem from './Navitem.svelte';

    const items: MenuItem[] = [
        {
            title: "Plattform",
            href: "/platform"
        },
        {
            title: "Lösungen",
            href: "/solutions",
            children: [
                {
                    title: 'Schule & Bildung',
                    href: '/solutions-bildungswesen',
                },
                {
                    title: "Arztpraxis",
                    href: "/solutions-medizin",
                },
                {
                    title: "Hotel & Gastronomie",
                    href: "/solutions-gastronomie",
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
<header
    class="fixed z-10 left-0 top-0 right-0 bottom-auto border-b h-nav flex px-10 bg-white"
>
    <div class="flex flex-row">

    
    <a href="/" title="Signageful" class="max-w-full flex items-center">
        <Logo />
    </a>
        <div class="ml-2 hidden md:flex flex-row items-center">
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
    <!--  middle-container  -->
    <div class="flex whitespace-nowrap pl-4">
        {#each items as item}
            <Navitem item={item} />
        {/each}
    </div>
    <!-- right container-->
    <div class="flex justify-end items-center flex-1 space-x-3">
        <a href="https://app.signageful.com" title="Zum Login" class="px-3 text-primary-600 font-semibold">Anmelden</a>
        
    </div>
</header>