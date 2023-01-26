<script lang="ts">
	import PostCard from './post-card.svelte';
	import type { Post } from './post.types';

	const imports = import.meta.glob('../../posts/*.md', {
		eager: true
	});

	const blogPosts: Post[] = [];
	for (const path in imports) {
		console.log('ehehe?');
		const post = imports[path] as Post | undefined;
		if (post) {
			const metadata = post.metadata || {};
			metadata.url = path.replace('./posts/', '').replace('.md', '');
			blogPosts.push({
				metadata
			});
		}
	}

	console.log(blogPosts);

	let posts = [
		{ title: 'HVV Fahrplan auf deinem Screen', description: 'Short description 1', url: '/post1' },
		{ title: 'Post 2', description: 'Short description 2', url: '/post2' },
		{ title: 'Post 3', description: 'Short description 3', url: '/post3' },
		{ title: 'Post 4', description: 'Short description 4', url: '/post4' },
		{ title: 'Post 5', description: 'Short description 5', url: '/post5' },
		{ title: 'Post 6', description: 'Short description 6', url: '/post6' }
	];
</script>

<div class="max-w-7xl mx-auto relative py-16">
	<div class="grid gap-4 grid-cols-1 md:grid-cols-3">
		{#each posts as post}
			<PostCard {...post} />
		{/each}
	</div>
</div>
