import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import ThemeProvider from '@/lib/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecocatlitters.com'),
  title: {
    default: 'EcoCatLitters | Sustainable Cat Litter for a Greener Planet',
    template: '%s | EcoCatLitters',
  },
  description: 'Join the fight against plastic pollution. Discover eco-friendly, biodegradable cat litters that protect our planet without compromising on performance.',
  keywords: ['eco cat litter', 'sustainable cat litter', 'biodegradable cat litter', 'environmentally friendly cat litter', 'green cat litter', 'natural cat litter'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'EcoCatLitters',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@ecocatlitters',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
