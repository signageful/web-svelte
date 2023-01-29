<script lang="ts">
    import { fade, slide } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import Logo from '../logo/Logo.svelte';
	import type { MenuItem } from './menu.types';
	import Navitem from './Navitem.svelte';
    import { browser } from '$app/environment';
	import MobileNavItem from './MobileNavItem.svelte';

	const items: MenuItem[] = [
		{
			title: 'Plattform',
			href: '/platform'
		},
		{
			title: 'Lösungen',
			href: '/solutions',
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
<div>
	<header class="fixed z-10 left-0 top-0 right-0 bottom-auto border-b h-nav flex px-10 bg-white">
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
		<div class="flex flex-1 justify-end md:hidden">
			<button
				type="button"
				class="text-slate-900 hover:text-gray-400 focus:outline-none focus:text-gray-600"
				on:click={toggleNavbar}
			>
				<span class="sr-only">Open main menu</span>
				<!-- Heroicon name: outline/menu -->
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>
		<!--  middle-container  -->
		<div class="hidden whitespace-nowrap pl-4 md:flex">
			{#each items as item}
				<Navitem {item} />
			{/each}
		</div>
		<!-- right container-->
		<div class="hidden md:flex justify-end items-center flex-1 space-x-3">
			<a
				href="https://app.signageful.com"
				title="Zum Login"
				class="px-3 text-primary-600 font-semibold">Anmelden</a
			>
		</div>
	</header>

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
</div>
