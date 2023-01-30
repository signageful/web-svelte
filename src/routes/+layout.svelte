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
<svelte:head>
    <script>
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="EOMGSpft5ymHSY2DEPFXiyFDVB7zLhG0";;analytics.SNIPPET_VERSION="4.15.3";
        analytics.load("EOMGSpft5ymHSY2DEPFXiyFDVB7zLhG0");
        analytics.page();
    }}();
    </script>
</svelte:head>

<div class="relative">
<Header />
<slot />
<Footer />
</div>

{#if isWinter}
	<Winter />
{/if}
