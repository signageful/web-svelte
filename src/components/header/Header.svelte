<script lang="ts">
	import { navigating } from '$app/stores';
	import Logo from '../logo/Logo.svelte';
	import type { MenuItem } from './menu.types';
	import Navitem from './Navitem.svelte';
	import { Transition } from '@rgossiaux/svelte-headlessui';

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

	const handleScroll = () => {
		document.documentElement.scrollTop > 96
			? navRef.classList.remove('at-top')
			: document.documentElement.scrollTop < 64 && navRef.classList.add('at-top');
	};

	const handleScape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			showMenu = false;
		}
	};

	$: if ($navigating) {
		showMenu = false;
	}
</script>

<svelte:window on:scroll={handleScroll} on:keyup={handleScape} />
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
	<Transition
		show={showMenu}
		enter="transition-opacity duration-75"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition-opacity duration-150"
		leaveFrom="opacity-100"
		leaveTo="opacity-0"
	>
		<div class="z-20 absolute inset-0 bg-white p-2 origin-top md:hidden">
			<div class="bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div class="px-5 pt-4 flex items-center justify-between">
					<div />
					<div class="-mr-2">
						<button
							on:click={toggleNavbar}
							type="button"
							class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
						>
							<span class="sr-only">Close menu</span>
							<!-- Heroicon name: outline/x -->
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
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="pt-5 pb-6">
					<div class="px-2 space-y-1">
						{#each items as item}
							<Navitem {item} />
						{/each}
					</div>
                    <div class="mt-6 px-5">
                        <p class="text-center text-base font-medium text-gray-500">
                            Existing customer?
                            <a href="https://app.signageful.com" class="text-gray-900 hover:underline">Login</a>
                        </p>
                    </div>
				</div>
			</div>
		</div>
	</Transition>
</div>
