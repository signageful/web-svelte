<script lang="ts">
	import HeroImage from '../../assets/content_management.png';
</script>

<svelte:head>
	<title>Signageful - Die Plattform für erfolgreiche Digital Signage</title>
	<meta
		name="description"
		content="Signageful bietet eine benutzerfreundliche Plattform für die Verwaltung und Anzeige von Digital Signage Inhalten. Steuern Sie mehrere Monitore aus einer zentralen Plattform, erstellen Sie Kampagnen und planen Sie Anzeigezeiten. Maximieren Sie die Wirkung Ihrer Digital Signage mit Signageful."
	/>
</svelte:head>
<section
	class="flex relative w-full py-16 md:py-20  bg-primary-100  min-h-screen overflow-hidden"
>
	<div class="max-w-7xl w-full mx-auto flex items-center px-4">
		<div class="grid w-full md:grid-cols-2 text-left">
			<div class="flex flex-col order-2 md:order-1">
				<h1 class="font-semibold text-4xl lg:text-6xl text-black  mb-5">
					Eine unbegrenzte und kombinierbare Content-Plattform.
				</h1>
				<div class="max-w-md mb-7 text-slate-600 font-medium">
					Signageful ist mehr als nur ein einfaches Content Management System (CMS). Es ist die
					Zukunft der Inhaltsverwaltung für Digital Signage. Mit unserer Plattform können Sie Ihre
					Inhalte unbegrenzt kombinieren und anpassen, um die Wirkung Ihrer Digital Signage zu
					maximieren. Dank der benutzerfreundlichen Oberfläche und der Möglichkeit, mehrere Monitore
					aus einer zentralen Plattform heraus zu steuern, haben Sie die volle Kontrolle über Ihre
					Kampagnen und Anzeigezeiten. Willkommen bei der nächsten Stufe der Digital Signage mit
					Signageful.
				</div>
			</div>
			<div class="flex items-center justify-center my-4 md:my-0 md:order-2">
				<img
					class="rounded-lg overflow-hidden w-full h-auto max-w-full object-cover"
					alt="Billboard in City"
					src={HeroImage}
				/>
			</div>
		</div>
	</div>
</section>
<section class="flex relative w-full md:py-20 py-16 bg-yellow-400 overflow-hidden">
	<div class="max-w-7xl w-full mx-auto flex items-center px-4">
		<div class="grid w-full md:grid-cols-2">
			<div class="relative">
				<h2 class="font-semibold text-4xl lg:text-4xl text-black mb-5">Was ist Digital Signage?</h2>
			</div>
			<div class="prose font-medium">
				<p>
					Digital Signage ist die Anzeige von Werbung, Nachrichten oder Informationen auf
					elektronischen Displays, wie zum Beispiel Monitoren oder Fernsehgeräten. Es wird oft in
					Einkaufszentren, Flughäfen, Einzelhandelsgeschäften und öffentlichen Gebäuden eingesetzt,
					um potenzielle Kunden anzulocken und über Angebote und Events zu informieren.
				</p>
				<p>
					Ein wichtiger Aspekt von Digital Signage ist die Möglichkeit, Inhalte in Echtzeit zu
					aktualisieren und anzupassen, um auf die Bedürfnisse des Publikums und die
					Verkaufsstrategie einzugehen.
				</p>
				<p>
					In vielen Fällen werden auch eCommerce-Funktionen wie z.B. QR-Codes oder NFC-Tags genutzt,
					um Kunden direkt zur Online-Shop oder zu spezifischen Produkten zu führen, wodurch eine
					direkte Verbindung zwischen Offline und Online erstellt wird. Digital Signage ist auch in
					Kiosk-Systemen eine wichtige Komponente, da es ermöglicht, die Inhalte auf den
					Bildschirmen dynamisch anzupassen und die Interaktion mit dem Publikum zu erhöhen.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="flex relative w-full md:py-20 py-16 bg-white overflow-hidden">
	<div class="max-w-7xl w-full mx-auto flex items-center flex-col px-4">
		<div class="flex items-center justify-center mb-20 w-full">
			<h2 class="font-semibold text-4xl text-center max-w-2xl mx-auto">
				Werde unabhängig von teuren Lizenzmodellen mit Signageful - Unsere kosteneffiziente
				Cloud-basierte Lösung für Digital Signage.
			</h2>
		</div>
		<div class="columns-1 md:columns-2 prose w-full max-w-4xl">
			<p>
				Signageful ist die ideale Alternative zu traditionellen Digital Signage Systemen. Wir
				basieren auf Open Source Technologie wie Ubuntu Core von Canonical, was bedeutet, dass Sie
				von einer stabilen und sicheren Plattform profitieren, ohne hohe Lizenzgebühren zahlen zu
				müssen.
			</p>
			<p>
				Unsere Lösungen sind für alle Zielgruppen und jede Art von Unternehmen geeignet, von kleinen
				Einzelhandelsgeschäften bis hin zu großen Unternehmen.
			</p>
			<p>
				Mit Signageful müssen Sie sich keine Gedanken über die Anschaffung von teuren Android oder
				Windows Lizenzen machen.
			</p>
			<p>
				Unsere Plattform unterstützt zudem alle gängigen Monitor-Hersteller, so dass Sie die Wahl
				haben, welche Hardware Sie verwenden möchten. Mit Signageful haben Sie die volle Kontrolle
				über Ihre Digital Signage Kampagnen und können flexibel auf die Bedürfnisse Ihres Publikums
				eingehen.
			</p>
		</div>
	</div>
</section>
