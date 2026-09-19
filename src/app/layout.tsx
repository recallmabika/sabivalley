import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Chipinge Safari Area | Wildlife Conservation & Eco-Tourism',
  description: 'Explore Chipinge Safari Area, a ZIMPARKS protected wildlife conservation and environmental education hub in the South East Lowveld of Zimbabwe.',
  openGraph: {
    title: 'Chipinge Safari Area | Wildlife Conservation & Eco-Tourism',
    description: 'Explore Chipinge Safari Area, a ZIMPARKS protected wildlife conservation and environmental education hub in the South East Lowveld of Zimbabwe.',
    url: 'https://chipinge-safari-area.com',
    siteName: 'Chipinge Safari Area',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-warm-white text-acacia antialiased">
        {children}
      </body>
    </html>
  );
}
