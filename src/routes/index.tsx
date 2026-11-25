import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle, MapPin, Phone, Star, PackageCheck, Bitcoin, Truck, ShieldCheck,
  Cog, Disc3, Zap, Car, Clock, Store, Camera,
} from "lucide-react";

const PHONE = "04144149993";
const WA_MSG = "Hola Repuestos Cacique Guaicaipuro, vengo de su página web y necesito cotizar un repuesto para mi vehículo...";
const wa = (msg = WA_MSG) => `https://wa.me/58${PHONE.slice(1)}?text=${encodeURIComponent(msg)}`;
const MAPS = "https://www.google.com/maps/search/?api=1&query=Repuestos+Cacique+Guaicaipuro+Calle+Michelena+Valencia";
const TITLE = "Repuestos Cacique Guaicaipuro | Repuestos VW y Audi en Valencia";
const DESC = "20 años en Valencia. Repuestos Volkswagen, Audi y multimarca en stock, delivery en Valencia y pagos con Binance. Cotiza por WhatsApp 0414-4149993.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btn = "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-semibold transition-transform active:scale-95";
const waBtn = `${btn} bg-whatsapp text-whatsapp-foreground hover:brightness-110`;

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-ink-foreground/10 bg-ink/95 text-ink-foreground backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#inicio" className="font-display text-sm leading-tight sm:text-base">
            Repuestos Cacique<br className="sm:hidden" /> Guaicaipuro, C.A.
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#inicio" className="hover:text-accent">Inicio</a>
            <a href="#repuestos" className="hover:text-accent">Marcas y Repuestos</a>
            <a href="#pagos" className="hover:text-accent">Métodos de Pago</a>
            <a href="#ubicacion" className="hover:text-accent">Ubicación</a>
          </nav>
          <a href={wa()} target="_blank" rel="noopener" className={`${waBtn} px-3 py-2 text-sm`}>
            <MessageCircle className="h-4 w-4" /><span className="hidden sm:inline">Cotizar por WhatsApp (0414-4149993)</span><span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      <section id="inicio" className="stripe-bg bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-24">
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            20 años de experiencia en Valencia • +390 clientes nos califican en Google
          </p>
          <h1 className="mt-6 max-w-4xl text-3xl leading-tight sm:text-5xl md:text-6xl">
            El repuesto exacto para tu vehículo, <span className="text-accent">en stock</span> y con entrega inmediata en Valencia.
          </h1>
          <h2 className="mt-6 max-w-2xl font-sans text-lg font-normal text-ink-foreground/80">
            Especialistas en Volkswagen, Audi y líneas automotrices de alta rotación. Compra fácil, recibe delivery en la ciudad o retira directo en nuestra tienda de la Calle Michelena.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={wa()} target="_blank" rel="noopener" className={`${waBtn} text-lg`}>
              <MessageCircle className="h-5 w-5" /> Consultar disponibilidad por WhatsApp ahora
            </a>
            <a href={MAPS} target="_blank" rel="noopener" className={`${btn} border border-ink-foreground/30 hover:bg-ink-foreground/10`}>
              <MapPin className="h-5 w-5" /> Ver ubicación en Google Maps
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-star text-star" /> <b>4.1</b> en Google (+390 reseñas)</span>
            <span className="flex items-center gap-1 font-semibold text-accent"><Bitcoin className="h-4 w-4" /> Aceptamos Binance / USDT</span>
            <a href={`tel:${PHONE}`} className="flex items-center gap-1 underline"><Phone className="h-4 w-4" /> Llamar ahora</a>
          </div>
        </div>
      </section>

      <section id="pagos" className="bg-accent text-accent-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [PackageCheck, "Stock Real Garantizado", "Lo que buscas, lo tenemos listo para entrega."],
            [Bitcoin, "Pagos Flexibles", "Aceptamos Binance (USDT / Cripto), divisas, transferencias y pago móvil."],
            [Truck, "Delivery en Valencia", "Recibe tu repuesto en tu taller o domicilio sin perder tiempo."],
            [ShieldCheck, "Respaldo Comprobado", "20 años atendiendo al parque automotor de Carabobo."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Star;
            return (
              <div key={t as string} className="flex gap-3">
                <I className="h-8 w-8 shrink-0" />
                <div><h3 className="text-base">{t as string}</h3><p className="text-sm">{d as string}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="repuestos" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Encuentra la pieza que tu carro necesita hoy</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Evita compras equivocadas. Envíanos el modelo, año o foto del repuesto y nuestro equipo técnico valida la compatibilidad al instante.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            [Car, "Especialistas en Grupo VAG (Volkswagen y Audi)", "Amplio surtido en piezas de motor, suspensión, sensores, frenos y mantenimiento preventivo para modelos europeos.", true],
            [Cog, "Motor y Transmisión", "Empacaduras, kits de tiempo, bombas de agua, bombas de aceite y componentes internos de alta durabilidad.", false],
            [Disc3, "Tren Delantero, Suspensión y Frenos", "Amortiguadores, mesetas, terminales, pastillas y discos para conducción segura.", false],
            [Zap, "Electricidad y Sensores", "Alternadores, arranques, bobinas, sensores de oxígeno y repuestos electrónicos verificados.", false],
          ].map(([Icon, t, d, hl]) => {
            const I = Icon as typeof Star;
            return (
              <div key={t as string} className={`flex flex-col rounded-lg border p-6 ${hl ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>
                <I className={`h-9 w-9 ${hl ? "" : "text-primary"}`} />
                <h3 className="mt-4 text-xl">{t as string}</h3>
                <p className={`mt-2 flex-1 ${hl ? "opacity-90" : "text-muted-foreground"}`}>{d as string}</p>
                <a href={wa(`Hola Repuestos Cacique Guaicaipuro, vengo de su página web y necesito cotizar un repuesto de ${t}...`)} target="_blank" rel="noopener"
                  className={`mt-5 inline-flex items-center gap-2 font-semibold ${hl ? "underline" : "text-primary"}`}>
                  <MessageCircle className="h-4 w-4" /> Cotizar esta categoría
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href={wa()} target="_blank" rel="noopener" className={`${waBtn} text-lg`}><Camera className="h-5 w-5" /> Enviar foto o código del repuesto por WhatsApp</a>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl">Por qué más de 390 conductores en Valencia confían en nosotros</h2>
          <p className="mt-4 flex items-center gap-2 text-lg font-semibold">
            <span className="flex">{[0,1,2,3].map(i => <Star key={i} className="h-5 w-5 fill-star text-star" />)}<Star className="h-5 w-5 text-star" /></span>
            4.1 ★ en Google Maps (393 opiniones verificadas)
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Excelente! Siempre consigo lo que busco para Volkswagen... lo mejor de todo es que me aceptaron Crypto de Binance como pago, super cómodo y conveniente. ¡Así no los cambio por nadie!", "Kliber Pereira", "Local Guide · +460 opiniones"],
              ["Excelentes precios y buen stock de repuestos.", "Luis Saul Torres Noguera", "Local Guide · Reseña reciente"],
              ["Excelente todo, atención y surtido de primera.", "Asdrúbal García", "Local Guide"],
            ].map(([q, n, m]) => (
              <figure key={n} className="flex flex-col rounded-lg border bg-card p-6">
                <blockquote className="flex-1 text-lg">“{q}”</blockquote>
                <figcaption className="mt-4 text-sm"><b>— {n}</b><br /><span className="text-muted-foreground">{m}</span></figcaption>
              </figure>
            ))}
          </div>
          <a href={MAPS} target="_blank" rel="noopener" className={`${btn} mt-8 border border-foreground/20 bg-card hover:bg-background`}>
            <Star className="h-4 w-4" /> Leer todas las reseñas en Google Maps
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_2fr] md:py-24">
        <div className="font-display text-8xl leading-none text-primary md:text-9xl">20<span className="block text-2xl text-foreground">años</span></div>
        <div>
          <h2 className="text-3xl md:text-4xl">20 años resolviendo fallas automotrices en Carabobo</h2>
          <p className="mt-4 text-lg text-muted-foreground">En el sector automotriz, comprar barato dos veces sale caro. Durante dos décadas en Repuestos Cacique Guaicaipuro, C.A. nos hemos enfocado en mantener un inventario real, marcas confiables y asesoría honesta en mostrador. Sabemos lo crítico que es tener tu vehículo detenido; por eso combinamos atención ágil por WhatsApp, entrega a domicilio en Valencia y modernidad en métodos de pago como Binance para que resuelvas en minutos.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} className={`${btn} bg-primary text-primary-foreground hover:brightness-110`}><Phone className="h-5 w-5" /> Llamar: 0414-4149993</a>
            <a href={wa("Hola Repuestos Cacique Guaicaipuro, vengo de su página web y necesito asesoría técnica para mi vehículo...")} target="_blank" rel="noopener" className={`${btn} border border-primary text-primary hover:bg-primary/5`}>Solicitar asesoría técnica</a>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="text-3xl md:text-4xl">Visítanos en Valencia o pide tu delivery</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3"><MapPin className="h-6 w-6 shrink-0 text-accent" /><span><b>Dirección:</b> Calle 91 Michelena, Valencia 2001, Carabobo (Código Plus: 5XFV+C7).</span></li>
              <li className="flex gap-3"><Clock className="h-6 w-6 shrink-0 text-accent" /><span><b>Horario de Atención:</b> Lunes a Sábado desde las 8:00 a.m.</span></li>
              <li className="flex gap-3"><Phone className="h-6 w-6 shrink-0 text-accent" /><span><b>WhatsApp y Llamadas Directas:</b> <a href={`tel:${PHONE}`} className="underline">0414-4149993</a></span></li>
              <li className="flex gap-3"><Store className="h-6 w-6 shrink-0 text-accent" /><span><b>Modalidades:</b> Retiro en tienda y entrega a domicilio (Delivery).</span></li>
            </ul>
            <a href={MAPS} target="_blank" rel="noopener" className={`${btn} mt-8 bg-accent text-accent-foreground`}><MapPin className="h-5 w-5" /> Cómo llegar</a>
          </div>
          <iframe title="Mapa Repuestos Cacique Guaicaipuro" className="h-80 w-full rounded-lg border-0 md:h-full" loading="lazy"
            src="https://www.google.com/maps?q=5XFV%2BC7+Valencia+Carabobo&output=embed" />
        </div>
        <div className="border-t border-ink-foreground/10 bg-whatsapp text-whatsapp-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-lg md:text-xl"><b>¿Necesitas cotizar un repuesto ahora mismo?</b> Escríbenos directo al 0414-4149993 y recibe precio y disponibilidad en minutos.</p>
            <a href={wa()} target="_blank" rel="noopener" className={`${btn} shrink-0 bg-ink text-ink-foreground`}><MessageCircle className="h-5 w-5" /> Escribir por WhatsApp</a>
          </div>
        </div>
        <p className="py-6 text-center text-xs text-ink-foreground/60">© {new Date().getFullYear()} Repuestos Cacique Guaicaipuro, C.A. · Valencia, Carabobo</p>
      </section>

      <a href={wa()} target="_blank" rel="noopener" aria-label="Cotizar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-105">
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
