<script lang="ts">
    import HeroImage from '../../assets/mini_pc.png';
</script>
<svelte:head>
	<title>Player: Open-Source-Lösung für digitale Signage</title>
	<meta
		name="description"
		content="Unser Player ist eine Open-Source-Lösung für die digitale Signage-Branche. Profitieren Sie von unserer benutzerfreundlichen und kosteneffizienten Technologie für Ihre Werbekampagnen."
	/>
</svelte:head>

<section
	class="flex relative w-full mt-20 py-16 md:py-20  bg-primary-100  min-h-screen overflow-hidden"
>
	<div class="max-w-7xl w-full mx-auto flex items-center px-4">
		<div class="grid w-full md:grid-cols-2 text-left">
			<div class="flex flex-col order-2 md:order-1">
				<h1 class="font-semibold text-4xl lg:text-6xl text-black  mb-5">
					Leistungsstarker Open-Source-Player
				</h1>
				<div class="max-w-md mb-7 text-slate-600 font-medium">
					Erleben Sie die Zukunft der digitalen Werbung mit unserem Open-Source Player.
                    Unsere leistungsstarke Software unterstützt Touch-Screens native und läuft auf
                    allen gängigen Prozessoren wie Intel, AMD und ARM. Steigern Sie jetzt die
                    Interaktion mit Ihren Zielgruppen!
				</div>
                <div class="max-w-md mb-7 text-slate-600 font-medium">
                    Unser Player OS ist die ultimative Lösung für alle Ihre Anzeigebedürfnisse.
                    Egal ob Sie eine 1080p oder 4k Anzeige benötigen, ob Sie es auf einem Raspberry Pi
                    oder einem Intel NUC laufen lassen möchten, mit Ubuntu Core läuft unser Player OS
                    überall und unterstützt Touchscreens native, egal ob das Betriebssystem oder nicht."
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
				<h2 class="font-semibold text-4xl lg:text-4xl text-black mb-5">
                    Maximale Sicherheit durch Ubuntu Core
                </h2>
			</div>
			<div class="prose font-medium">
				<p>
					Unsere Player Software basiert auf Ubuntu Core, einem Betriebssystem speziell für
                    Internet of Things (IoT) Geräte entwickelt. Durch die Verwendung von Ubuntu Core
                    können wir ein Höchstmaß an Sicherheit für unsere Player gewährleisten.
				</p>
				<p>
					Durch tägliche automatische Updates des Betriebssystems werden Sicherheitslücken
                    schnellstmöglich geschlossen und die Integrität der Player gewährleistet.
                    Diese Maßnahme reduziert das Risiko von Hackerangriffen und Datenverlust erheblich.
				</p>
				<p>
					Mit einer Lebenszeit von bis zu 10 Jahren sind unsere Player zudem langfristig gegen
                    mögliche Sicherheitsrisiken gewappnet.
                    Durch die Kombination von Ubuntu Core und regelmäßigen Updates garantieren wir eine
                    sichere und zuverlässige Nutzung unserer Player.
				</p>
			</div>
		</div>
	</div>
</section>