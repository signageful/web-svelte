<script lang="ts">
    import { Navbar, NavBrand, NavUl, NavHamburger, Button } from 'flowbite-svelte'
    import { fade, slide } from 'svelte/transition';
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
</script>

<svelte:window on:keyup={handleScape} />
<header class="">
    <!--

        <nav class="fixed  left-0 top-0 right-0 bottom-auto border-b h-nav flex px-10 bg-white">
    -->
    <Navbar
        navClass="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b"
        let:hidden
    >
        <NavBrand href="/">
            <Logo />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
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
        <!-- <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
     
            <div class="flex items-center md:order-2">
                <a href="https://app.signageful.com" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
            
                <button on:click={toggleNavbar} type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                    {#each items as item}
                        <li>
                            <Navitem {item} />
                        </li>
                    {/each}
                </ul>
            </div>
        </div> -->
    </Navbar>
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
