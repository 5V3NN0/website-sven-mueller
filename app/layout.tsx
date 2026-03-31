export const metadata = {
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
      <body>{children}</body>
    </html>
  );
}
