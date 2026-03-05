import type {Metadata} from 'next';
import { Outfit, Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import BackgroundEffects from '@/components/layout/BackgroundEffects';
import PageTransition from '@/components/ui/PageTransition';
import Preloader from '@/components/ui/Preloader';
import ClientOnly from '@/components/ui/ClientOnly';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Script Kittens | Elite Gaming Tools Studio',
  description: 'Premium automation tools for gamers. Open source and community driven.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#13111a] text-[#f0ede4] font-inter antialiased selection:bg-[#c8b8e8]/30 selection:text-[#f0ede4]" suppressHydrationWarning>
        <ClientOnly>
          <Preloader />
          <PageTransition />
          <BackgroundEffects />
          <Sidebar />
          <main className="relative z-10 min-h-screen pt-[72px]">
            {children}
          </main>
        </ClientOnly>
      </body>
    </html>
  );
}
