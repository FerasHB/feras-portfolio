import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Feras Hababa | Junior App & Web Developer',
  description:
    'Modernes Portfolio von Feras Hababa – Junior App & Web Developer aus NRW, Deutschland.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
