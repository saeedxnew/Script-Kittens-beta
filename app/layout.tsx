import type {Metadata} from 'next';
import { Outfit, Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import TopControls from '@/components/layout/TopControls';
import BackgroundEffects from '@/components/layout/BackgroundEffects';
import Preloader from '@/components/ui/Preloader';
import PageTransition from '@/components/ui/PageTransition';

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
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#050508] text-white font-inter antialiased selection:bg-purple-600 selection:text-white md:pl-[280px]" suppressHydrationWarning>
        <Preloader />
        <PageTransition />
        <BackgroundEffects />
        <Sidebar />
        <TopControls />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
