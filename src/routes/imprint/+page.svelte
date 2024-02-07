<script>
	import { Obfuscate } from 'svelte-obfuscate';
	import Pager from '../../components/heroes/Pager.svelte';
</script>

<svelte:head>
	<title>Impressum - Signageful.com</title>
	<meta name="description" content="Impressum" />
</svelte:head>
<Pager title="Impressum" />

<div class="relative md:py-24 py-16">
	<div class="max-w-2xl mx-auto relative w-full">
		<div class="md:flex">
			<div
				class="p-6 bg-white dark:bg-slate-900 dark:text-white shadow dark:shadow-gray-800 rounded-md prose dark:prose-invert w-full"
			>
				<h3 class="dark:text-white">kikmedia.de</h3>
				<p>
					Lüdemannstrasse 49<br />
					24114 Kiel
				</p>
				<h3>Kontakt</h3>
				<p>
					Telefon: 0431 6793417<br />
					E-Mail: <Obfuscate email="office@kikmedia.de" />
				</p>
				
				<h4>Legal Note</h4>
				<p>
					<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
						Here is the link
					</a> to the platform of the European Commission according to Regulation on consumer Online
					Dispute Resolution. Signageful does currently not use the Online Dispute Resolution platform
					for any complaints.
				</p>
			</div>
		</div>
	</div>
</div>
