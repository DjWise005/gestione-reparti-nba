import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gestione Reparti NBA',
  description: 'Sistema di gestione commesse automotive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="it">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}