import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sven Müller – Strategic Sparring',
  description: 'Beratung für Führungskräfte und Organisationen an der Schnittstelle von Sport, Business und Impact.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
