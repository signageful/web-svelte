<script>
	import 'virtual:fonts.css';
	import '../app.css';
    import { page } from '$app/stores';
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/Footer.svelte';

    // Track client-side navigation events
	$: if (typeof window !== 'undefined' && window.analytics && $page.url) {
		window.analytics.page();
	}
</script>
<svelte:head>
    <script>
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="EOMGSpft5ymHSY2DEPFXiyFDVB7zLhG0";;analytics.SNIPPET_VERSION="4.15.3";
        //analytics.load("EOMGSpft5ymHSY2DEPFXiyFDVB7zLhG0");
        analytics.page();
    }}();
    </script>

    <script>
    window.consentManagerConfig = function(exports) {
        var React = exports.React
        var inEU = exports.inEU

        var bannerContent = React.createElement(
        'span',
        null,
        'We use cookies (and other similar technologies) to collect data to improve your experience on our site. By using our website, you՚re agreeing to the collection of data as described in our',
        ' ',
        React.createElement(
            'a',
            { href: '/privacy', target: '_blank' },
            'Website Data Collection Policy'
        ),
        '.'
        )
        var bannerSubContent = 'You can change your preferences at any time.'
        var preferencesDialogTitle = 'Website Data Collection Preferences'
        var preferencesDialogContent =
        'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.'
        var cancelDialogTitle = 'Are you sure you want to cancel?'
        var cancelDialogContent =
        'Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.'

        return {
        container: '#consent',
        writeKey: 'EOMGSpft5ymHSY2DEPFXiyFDVB7zLhG0',
        shouldRequireConsent: inEU,
        bannerContent: bannerContent,
        bannerSubContent: bannerSubContent,
        preferencesDialogTitle: preferencesDialogTitle,
        preferencesDialogContent: preferencesDialogContent,
        cancelDialogTitle: cancelDialogTitle,
        cancelDialogContent: cancelDialogContent
        }
    }
    </script>

    <script
        src="https://unpkg.com/@segment/consent-manager@5.3.0/standalone/consent-manager.js"
        defer
    ></script>
</svelte:head>
<style>
    #consent {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }
</style>

<div class="relative">
<Header />
<slot />
<Footer />
</div>


<div id="consent"></div>