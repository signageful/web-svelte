<script lang="ts">
	import Logo from './logo/Logo.svelte';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'

	const items = [
		{
			title: 'Platform',
			children: [
				{
					title: 'Cloud',
					href: '/cloud'
				},
				{
					title: 'Player',
					href: '/player'
				},
			]
		},
		{
			title: 'Solutions',
			children: [
				{
					title: 'Product',
					href: '#'
				},
				{
					title: 'Pricing',
					href: '#'
				},
				{
					title: 'Customers',
					href: '#'
				},
				{
					title: 'Use Cases',
					href: '#'
				}
			]
		},
	];

	let currentYear = new Date().getFullYear();
</script>

<footer class="print:hidden sticky top-[100vh] pt-12">
    <Footer footerType="custom" customClass="top-[100vh] pt-12">
        <div class="max-w-7xl mx-auto md:flex md:justify-between px-4">
            <div class="mb-6 md:mb-0">
                <Logo className="h-12 w-full" />
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                {#each items as item}
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            {item.title}
                        </h2>
                        <FooterLinkGroup>
                            {#each item.children as child}
                                <FooterLink liClass="mb-4" href={child.href}>
                                    {child.title}
                                </FooterLink>
                            {/each}
                        </FooterLinkGroup>
                    </div>
                {/each}
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between p-4">
             <FooterCopyright href="/" by="teamspiel GmbH" year={currentYear} />
            <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/imprint">Imprint</FooterLink>
            </FooterLinkGroup>
        </div>
       
    </Footer>
</footer>
