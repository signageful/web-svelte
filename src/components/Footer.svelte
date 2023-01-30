<script lang="ts">
	import Logo from './logo/Logo.svelte';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'

    type LinkItem = {
        title: string;
        href: string;
        external?: boolean;
    };
    type Item = {
        title: string;
        children: LinkItem[];
    };

	const items: Item[] = [
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
            title: "Integrator",
            children: [
                {
                    title: "Become a partner",
                    href: "https://a6bnzivz50w.typeform.com/to/LpLu6joG",
                    external: true
                }
            ],
        },
		{
			title: 'Company',
			children: [
				{
					title: 'Contact',
					href: '/contact'
				},
			]
		},
	];

	let currentYear = new Date().getFullYear();

    const aClass = 'text-slate-200 hover:text-slate-300 transition-colors duration-200';
</script>

<footer class="print:hidden sticky top-[100vh]">
    <Footer footerType="custom" customClass="top-[100vh] pt-12 bg-primary-600">
        <div class="max-w-7xl mx-auto md:flex md:justify-between px-4">
            <div class="mb-6 md:mb-0">
                <Logo className="h-12 w-full fill-white" />
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                {#each items as item}
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                            {item.title}
                        </h2>
                        <FooterLinkGroup>
                            {#each item.children as child}
                                <FooterLink
                                    liClass="mb-4" aClass={aClass}
                                    href={child.href}
                                    target={child.external ? '_blank' : '_self'}
                                >
                                    {child.title}
                                </FooterLink>
                            {/each}
                        </FooterLinkGroup>
                    </div>
                {/each}
            </div>
        </div>
        <hr class="my-6 border-primary-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between p-4">
            <FooterCopyright aClass={aClass} spanClass="text-slate-100" href="/" by="teamspiel GmbH" year={currentYear} />
            <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <FooterLink aClass={aClass} href="/terms-of-service">Terms of Service</FooterLink>
                <FooterLink aClass={aClass} href="/privacy">Privacy Policy</FooterLink>
                <FooterLink aClass={aClass} href="/imprint">Imprint</FooterLink>
            </FooterLinkGroup>
        </div>
       
    </Footer>
</footer>
