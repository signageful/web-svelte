<script lang="ts">
    import { Navbar, NavBrand, NavUl, NavHamburger, Button } from 'flowbite-svelte'
    import { fade, slide } from 'svelte/transition';
    import { createEventDispatcher } from "svelte";
	import { navigating } from '$app/stores';
	import Logo from '../logo/Logo.svelte';
	import type { MenuItem } from './menu.types';
	import Navitem from './Navitem.svelte';
    import { browser } from '$app/environment';
	import MobileNavItem from './MobileNavItem.svelte';

	const items: MenuItem[] = [
        {
            title: "Produkt",
            href: "#",
            children: [
                 {
                    title: "Cloud",
                    href: "/cloud"
                },
                {
                    title: "Player",
                    href: "/player"
                },
            ]
        },
		{
			title: 'Lösungen',
			href: '#',
			children: [
				{
					title: 'Schule & Bildung',
					href: '/solutions-bildungswesen'
				},
				{
					title: 'Arztpraxis',
					href: '/solutions-medizin'
				},
				{
					title: 'Hotel & Gastronomie',
					href: '/solutions-gastronomie'
				}
			]
		},
        {
            title: "Blog",
            href: "/blog"
        }
	];

	let showMenu = false;

	const toggleNavbar = () => {
		showMenu = !showMenu;
	};

	let navRef: HTMLElement;
    let scrollTop: number | null = null;
    let scrollLeft: number | null = null;

    function disableScroll() {
        if (browser) {
            scrollTop = 
                window.pageYOffset || window.document.documentElement.scrollTop;
            scrollLeft = 
                window.pageXOffset || window.document.documentElement.scrollLeft,
                window.onscroll = function() {
                window.scrollTo(scrollLeft!, scrollTop!);
            }};
        }
    
    function enableScroll() {
        if (browser) {
            window.onscroll = function() {};
        }
    };

	const handleScape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			showMenu = false;
		}
	};

	$: if ($navigating) {
		showMenu = false;
	}

    $: if (showMenu) {
        disableScroll();
    } else {
        enableScroll();
    }


    /**
     * Sticky Headroom magic area
    */
    const offset = 0;
    const tolerance = 0;

    let headerClass = "unfixed";
    let lastHeaderClass = "unfixed";
    let y = 0;
    let lastY = 0;

    const dispatch = createEventDispatcher();

    function deriveClass(y = 0, scrolled = 0) {
        if (y <= 100) return "unfixed";

        if (y < offset) return "unfixed";
        if (!scrolled || Math.abs(scrolled) < tolerance) return "unfixed";
        
        const dir = scrolled < 0 ? "down" : "up";
        
        // on the way to top
        if (dir === "up") return "pinned";
        // on the way to bottom
        if (dir === "down") return "unpinned";
        
        return headerClass;
    }

    function updateClass(y = 0) {
        const scrolledPxs = lastY - y;
        const result = deriveClass(y, scrolledPxs);

        lastY = y;

        return result;
    }

    $: {
        headerClass = updateClass(y);
        if (headerClass !== lastHeaderClass) {
            dispatch(headerClass);
        }
        lastHeaderClass = headerClass;
    }
</script>
<style>
    .headroom {
        position: relative;
        width: 100%;
        transition: transform 300ms linear;
        transition-duration: 300ms;
    }

    .headroom.pinned {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        transform: translateY(0);
    }

    .headroom.unpinned {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        transform: translateY(-100%);
    }
</style>
<svelte:window on:keyup={handleScape} bind:scrollY={y} />
<header class="">
    <!--

        <nav class="fixed  left-0 top-0 right-0 bottom-auto border-b h-nav flex px-10 bg-white">
    -->
    <div class={`headroom ${headerClass || ''}`}>
    <Navbar
        navClass="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b"
        let:hidden
    >
        <NavBrand href="/">
            <Logo />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden md:block">
                Signageful
            </span>
        </NavBrand>
        <div class="flex md:order-2">
            <Button  href="https://app.signageful.com" size="sm">Get started</Button>
            <NavHamburger on:click={toggleNavbar} />
        </div>
        <NavUl {hidden} class="order-1">
            {#each items as item}
                <Navitem {item} />
            {/each}
        </NavUl>
    </Navbar>
    </div>
    {#if showMenu} 
    <div aria-modal="true">
        <div class="absolute inset-0 overflow-hidden">
            {#if showMenu}
            <div
                transition:fade
                on:click={toggleNavbar}
                class="z-10 absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"></div>
            {/if}

            <div class="z-10 fixed inset-y-0 right-0 max-w-full flex">
                {#if showMenu}
                    <div
                        transition:slide
                        class="w-screen max-w-md"
                    >
                        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div class="px-4 sm:px-6">
                                <div class="flex items-start justify-between">
                                    <a href="/" title="Signageful" class="text-lg font-medium text-gray-900" id="slide-over-title">
                                        <Logo />
                                    </a>
                                    <div class="ml-3 h-7 flex items-center">
                                        <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                           on:click={toggleNavbar}
                                        >
                                            <span class="sr-only">Close panel</span>
                                            <svg class="h-6 w-6"
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <!-- content area-->
                            <div class="mt-6 relative flex-1 px-4 sm:px-6 space-y-2">
                                {#each items as item}
                                    <MobileNavItem {item} />
                                {/each}
                            </div>
                            <div class="px-4 sm:px-6">
                                <!-- space for login foo-->
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    </div>
    {/if}
</header>
