<script>
	import 'virtual:fonts.css';
	import '../app.css';
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Winter from '../components/winter/Winter.svelte';

	export let isWinter = false;

	// should render <Winter /> in Winter months
	const month = new Date().getMonth();
	if (month === 11 || month === 0 || month === 1) {
		isWinter = true;
	}
</script>

<div class="relative">
<Header />
<slot />
<Footer />
</div>

{#if isWinter}
	<Winter />
{/if}
