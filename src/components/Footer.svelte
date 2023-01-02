<script lang="ts">
    const items = [
        {
            title: "Solutions",
            children: [
                {
                    title: "Product",
                    href: "#"
                },
                {
                    title: "Pricing",
                    href: "#"
                },
                {
                    title: "Customers",
                    href: "#"
                },
                {
                    title: "Use Cases",
                    href: "#"
                }
            ]
        },
        {
            title: "Solutions",
            children: [
                {
                    title: "Product",
                    href: "#"
                },
                {
                    title: "Pricing",
                    href: "#"
                },
                {
                    title: "Customers",
                    href: "#"
                },
                {
                    title: "Use Cases",
                    href: "#"
                }
            ]
        },
        {
            title: "Solutions",
            children: [
                {
                    title: "Product",
                    href: "#"
                },
                {
                    title: "Pricing",
                    href: "#"
                },
                {
                    title: "Customers",
                    href: "#"
                },
                {
                    title: "Use Cases",
                    href: "#"
                }
            ]
        },
        {
            title: "Solutions",
            children: [
                {
                    title: "Product",
                    href: "#"
                },
                {
                    title: "Pricing",
                    href: "#"
                },
                {
                    title: "Customers",
                    href: "#"
                },
                {
                    title: "Use Cases",
                    href: "#"
                }
            ]
        },
        {
            title: "Company",
            children: [
                {
                    title: "AGB",
                    href: "/terms-of-service"
                },
                {
                    title: "Privacy",
                    href: "/privacy"
                },
                {
                    title: 'Impressum',
                    href: '/imprint'
                }
            ]
        }
    ]

    let currentYear = new Date().getFullYear();
</script>

<footer class="print:hidden sticky top-[100vh]">
    <div class="bg-dark relative overflow-hidden text-white font-mono text-xs antialiased pt-24 lg:pt-32 pb-16 px-8 lg:px-24">
        <div class="max-w-6xl mx-auto flex flex-wrap justify-between pb-12 hover-within:underline-grow">
            {#each items as item}
                <div class="w-1/2 pr-4 pb-12 lg:w-auto">
                    <h6 class="uppercase text-sm font-bold pb-4 relative">
                        {item.title}
                    </h6>
                    <ul class="space-y-2">
                        {#each item.children as child}
                            <li>
                                <a href={child.href}>
                                    {child.title}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
        <div class="mx-auto max-w-6xl flex flex-wrap items-end justify-between">
            <div />
            <p class="w-full pt-8 text-xs lg:w-auto lg:text-right">
                &copy; {currentYear} teamspiel GmbH
                <br />
                All rights reserved
            </p>
        </div>
    </div>
</footer>