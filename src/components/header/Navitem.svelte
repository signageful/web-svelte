<script lang="ts">
	import { page } from '$app/stores';
	import { scale } from 'svelte/transition';
	import type { MenuItem } from './menu.types';

	export let item: MenuItem;
</script>

{#if item.children}
	<div class="group relative flex items-center justify-center">
		<button
			class="max-w-100 flex items-center justify-center group text-black group-hover:text-primary-600  hover:text-primary-600 bg-transparent no-underline py-8 px-3 {$page.url.pathname.startsWith(
				item.href
			)
				? 'text-primary-600'
				: ''}"
		>
			<span class="flex text-base items-center font-semibold whitespace-nowrap text-current">
				<span>{item.title}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="8"
					height="5"
					viewBox="0 0 8 5"
					class="ml-2 text-current"
					><polygon
						fill="currentColor"
						points="4.448 1.248 3.6 .4 0 4 3.6 7.6 4.448 6.752 1.696 4"
						transform="matrix(0 -1 -1 0 8.4 4.4)"
					/></svg
				>
			</span>
		</button>
		<div
			in:scale={{ duration: 100, start: 0.95 }}
			out:scale={{ duration: 75, start: 0.95 }}
			class="sub-nav-item absolute pt-1  hidden group-hover:block"
		>
			<div class="grid gap-1">
				{#each item.children as child}
					<a href={child.href}>
						<div class="md:w-[14rem]">
							<span class="block font-mono text-base text-black font-bold">
								{child.title}
							</span>
							{#if child.description}
								<p class="font-mono text-xs text-slate-700">
									{child.description}
								</p>
							{/if}
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<a
		href={item.href}
		class="max-w-100 flex items-center justify-center text-black bg-transparent no-underline py-8 px-3"
	>
		<span
			class="flex text-base font-semibold whitespace-nowrap {$page.url.pathname.startsWith(
				item.href
			)
				? 'text-primary-600'
				: ''}"
		>
			{item.title}
		</span>
	</a>
{/if}
