import type { Metadata } from 'next';
import './globals.css';
import { site } from './site';

export const metadata: Metadata = {
  title: `${site.name} — Automatización de procesos`,
  description: 'Automatización de procesos para empresas y negocios. Integración de sistemas, reportes y gestión documental con soluciones a medida de tu operación.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
