import { site, contactUrl } from './site';
import MotionLayer from './motion';

function Arrow() { return <span aria-hidden="true">↗</span>; }

const services = [
  { number: '01', title: 'Datos y reportes', text: 'Consolida planillas, cruza información y prepara reportes recurrentes. Datos consistentes para seguir la operación y tomar decisiones.', tags: ['Planillas', 'Reportes', 'Validación de datos'], icon: '▦' },
  { number: '02', title: 'Integración de sistemas', text: 'Conecta archivos y plataformas web para agilizar el ingreso de pedidos, registros y actualizaciones. Menos traspasos manuales entre herramientas.', tags: ['Ingreso de datos', 'Flujos de trabajo'], icon: '⇄' },
  { number: '03', title: 'Gestión documental', text: 'Organiza y extrae información de documentos y correos. Agiliza la preparación de datos para cotizaciones, órdenes y tareas administrativas.', tags: ['Documentos', 'Correos', 'IA aplicada'], icon: '≡' },
];

export default function Home() {
  const contact = contactUrl();
  return <>
    <MotionLayer />
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className="header wrap">
      <a className="brand" href="#" aria-label={`${site.name}, inicio`}><span className="brand-mark">v.</span><span>{site.name}<small>Consultoría en automatización</small></span></a>
      <nav aria-label="Navegación principal"><a href="#soluciones">Soluciones</a><a href="#experiencia">Experiencia</a><a className="nav-contact" href="#contacto">Conversemos <Arrow /></a></nav>
    </header>
    <main id="contenido">
      <div className="hero-shell"><section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="mini-line" /> AUTOMATIZACIÓN PARA TU EMPRESA</p>
          <h1 id="hero-title"><span>Tu equipo tiene</span><em>mejores cosas</em><span>que hacer.</span></h1>
          <p className="hero-description">Que el trabajo repetitivo deje de ocupar el día. Automatizo tareas y conecto herramientas para que tu negocio funcione con menos trabajo manual.</p>
          <a className="button primary" href="#contacto">Hablemos de tu negocio <Arrow /></a>
          <p className="hero-note">Excel, correos, documentos y ese sistema que usas todos los días.</p>
        </div>
        <div className="flow" aria-label="Ejemplo de flujo: archivos y datos se validan automáticamente para generar un reporte listo para revisar">
          <div className="flow-top"><span>Todo empieza a conectar.</span><span className="flow-type">UN EJEMPLO ↓</span></div>
          <div className="flow-inputs"><span><b aria-hidden="true">▦</b> Excel</span><span><b aria-hidden="true">@</b> Correos</span><span><b aria-hidden="true">≡</b> Documentos</span></div>
          <div className="connector" aria-hidden="true"><i /><i /><i /></div>
          <div className="automation"><span className="automation-symbol" aria-hidden="true">✳</span><div><strong>Automatización a medida</strong><span>Reglas claras. Datos validados.</span></div><span aria-hidden="true">↗</span></div>
          <div className="vertical-line" aria-hidden="true" />
          <div className="flow-result"><span className="check" aria-hidden="true">✓</span><div><strong>Información lista para decidir.</strong><span>Tu equipo mantiene el control.</span></div></div>
          <div className="flow-bottom"><span>MENOS FRICCIÓN</span><span>MÁS TIEMPO PARA AVANZAR ↗</span></div>
        </div>
      </section>
      </div><div className="focus-strip"><div className="wrap"><span>PARA NEGOCIOS QUE QUIEREN AVANZAR</span><p>Comercio <b>/</b> Servicios <b>/</b> Logística <b>/</b> Operaciones</p></div></div>
      <section className="solutions wrap section" id="soluciones">
        <div className="section-heading"><div><p className="eyebrow">01 / SOLUCIONES PARA TU OPERACIÓN</p><h2>Menos carga operativa.<br />Más capacidad para crecer.</h2></div><p>Para pequeños negocios y equipos en crecimiento. La solución se adapta a tu proceso, no al revés.</p></div>
        <div className="services">{services.map(service => <article className="service" key={service.number}><div className="service-top"><span className="service-icon" aria-hidden="true">{service.icon}</span><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>
      <section className="experience" id="experiencia"><div className="wrap experience-grid"><div><p className="eyebrow">02 / TECNOLOGÍA CON CRITERIO DE NEGOCIO</p><h2>Entender la operación.<br />Resolver lo que importa.</h2><p>Soy Víctor. Mi experiencia en automatización comenzó dentro de la operación: procesando información de Excel e ingresándola a sistemas web para reducir tareas manuales de mi propio trabajo.</p><p>Trabajo directamente contigo para entender cómo funciona tu negocio y convertir un problema cotidiano en una solución práctica. Con el foco puesto en las personas que van a usarla.</p><div className="signature"><span className="signature-icon" aria-hidden="true">VC</span><div><strong>{site.name}</strong><span>Atención directa · Soluciones a medida</span></div></div></div><div className="case"><p className="case-label">CASO DE APLICACIÓN / EXCEL → SISTEMA WEB</p><div className="case-row"><span>ANTES</span><p>Abrir planilla<br />Preparar datos a mano<br />Copiar campo por campo<br />Revisar y repetir</p></div><div className="case-divider" aria-hidden="true">↓</div><div className="case-row after"><span>DESPUÉS</span><p>Procesar el archivo<br />Automatizar el ingreso<br /><strong>Revisar el resultado ✓</strong></p></div><small>Ejemplo basado en experiencia propia con Excel y sistemas web.</small></div></div></section>
      <section className="process wrap section" id="proceso"><div className="section-heading"><div><p className="eyebrow">03 / UNA FORMA CLARA DE TRABAJAR</p><h2>Del diagnóstico<br />a la implementación.</h2></div><p>Un alcance claro desde el principio, con un resultado que puedas comprobar.</p></div><div className="steps"><article><span>01</span><h3>Entender y priorizar</h3><p>Vemos qué haces, con qué herramientas y dónde se va el tiempo.</p></article><article><span>02</span><h3>Definir y construir</h3><p>Acordamos qué automatizar, el alcance, el plazo y el precio antes de construir.</p></article><article><span>03</span><h3>Probar y entregar</h3><p>Implemento, probamos con tu proceso y te muestro cómo usarlo.</p></article></div></section>
      <section className="contact wrap" id="contacto"><div><p className="eyebrow">EL SIGUIENTE PASO</p><h2>Tu próximo avance puede<br />empezar con un proceso.</h2><p>Cuéntame qué necesita tu negocio. Identifiquemos dónde una automatización puede aportar valor.</p></div><div className="contact-actions">{contact ? <><a className="button dark" href={contact}>Conversemos <Arrow /></a>{site.email && <a className="contact-detail" href={`mailto:${site.email}`}>{site.email}</a>}</> : <p className="contact-pending">Canal de contacto disponible próximamente.</p>}{site.linkedin && <a className="contact-detail" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>}</div></section>
    </main>
    <footer className="wrap footer"><a className="footer-brand" href="#">{site.name}<span>Automatización de procesos</span></a><p>Tecnología al servicio de tu negocio.</p><a href="#">Volver arriba ↑</a></footer>
  </>;
}
