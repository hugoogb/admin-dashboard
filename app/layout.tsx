import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    template: '%s | Dashboard',
    default: 'Dashboard'
  },
  description:
    'Dashboard para uso interno de la empresa, con el fin de tener un control de los servicios ofrecidos y los clientes que los utilizan.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
