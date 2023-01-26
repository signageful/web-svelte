<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<a href="#">
	<div class="bg-white rounded-lg w-full">
		<div>
			<img src="https://picsum.photos/400/300" alt="" class="rounded-lg" />
		</div>
		<div class="p-4">
			<h3 class="text-xl font-bold">{title}</h3>
			<p class="text-gray-500">{description}</p>
		</div>
	</div>
</a>
