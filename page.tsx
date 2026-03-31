'use client';

import React, { useState } from 'react';

const colors = {
  kickstart: '#CF7A22',
  salesImpact: '#994644',
  strategicSparring: '#01292C',
  moderation: '#4292B6',
  teamFlow: '#329B8D'
};

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const ProductCard = ({ title, color, slug }) => (
    <button
      onClick={() => setActivePage(slug)}
      style={{
        borderLeft: `4px solid ${color}`,
        background: 'white'
      }}
      className="p-6 text-left hover:bg-gray-50 transition w-full"
    >
      <p className="font-medium" style={{ color }}>{title}</p>
    </button>
  );

  const SectionHeading = ({ color, children }) => (
    <h2 className="text-2xl font-medium mb-6" style={{ color }}>
      {children}
    </h2>
  );

  // HOME PAGE
  if (activePage === 'home') {
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }} className="bg-white text-gray-900">
        {/* Navigation */}
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <button onClick={() => setActivePage('home')} className="font-medium text-lg" style={{ color: colors.strategicSparring }}>
              Sven Müller
            </button>
            <div className="flex gap-8 text-sm">
              <button onClick={() => setActivePage('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => setActivePage('formate')} className="hover:text-gray-600">Formate</button>
              <button onClick={() => setActivePage('kontakt')} className="hover:text-gray-600">Kontakt</button>
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-600">Impressum</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/profile.jpg"
                alt="Sven Müller"
                className="w-60 h-60 rounded-lg object-cover"
              />
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-medium mb-2" style={{ color: colors.strategicSparring }}>
              Klarheit. Entscheidung. Wirkung.
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Strategic Sparring für Klarheit, Entscheidung und Wirkung – in Strategie-, Marken-, Vertriebs- und Führungsfragen.
            </p>
            
            {/* Body Text */}
            <div className="max-w-2xl mx-auto mb-8 space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                Ich unterstütze Führungskräfte und Organisationen dabei, in zentralen Fragen Klarheit zu gewinnen, fundierte Entscheidungen zu treffen und diese wirksam umzusetzen. Meine Arbeit verbindet Erfahrung aus Sport und Business mit einem Verständnis dafür, wie echte Veränderung entsteht.
              </p>
              <p>
                Dabei arbeite ich eng mit meinen Auftraggebern zusammen – nicht als externer Experte, sondern als denkender Sparringspartner. Ich bringe meine Erfahrung als Führungskraft, meine fachliche Expertise sowie meine Methodenkompetenz als Coach ein und begleite Prozesse sowohl inhaltlich als auch auf der Ebene von Zusammenarbeit und Entwicklung.
              </p>
              <p>
                In der gemeinsamen Arbeit hinterfrage ich bestehende Annahmen, setze gezielte Impulse und arbeite mit passenden Interventionen, um neue Perspektiven zu öffnen und nachhaltige Veränderungen zu ermöglichen.
              </p>
              <p>
                Die Formate, die ich anbiete, sind flexibel und auf die konkrete Herausforderung ausgerichtet – je nachdem, ob es um Strategie, Vertrieb, Markenentwicklung, Führung oder Transformation geht.
              </p>
            </div>

            <a 
              href="https://bit.ly/Catch-Up_Sven"
              style={{ backgroundColor: colors.strategicSparring }}
              className="inline-block px-6 py-3 text-white font-medium rounded text-sm hover:opacity-90 transition"
            >
              Termin vereinbaren
            </a>
          </div>
        </section>

        {/* Arbeitsweise */}
        <section className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <SectionHeading color={colors.strategicSparring}>Wie ich arbeite</SectionHeading>
            <div className="space-y-3 text-sm text-gray-600 max-w-2xl">
              <p>• Sparring im engeren Sinne: Kollegiales Denken an zentralen Fragen</p>
              <p>• Klare, unbequeme Fragen: Wo halten wir uns selbst auf? Was sehen wir nicht?</p>
              <p>• Struktur und Prozess: Von der Frage zur Entscheidung zur Umsetzung</p>
              <p>• Vertraulichkeit und Fokus: Vollständige Konzentration auf dein Thema</p>
              <p>• Ganzheitliche Perspektive: Sport, Business und Organisationsentwicklung als integrative Ansätze</p>
            </div>
          </div>
        </section>

        {/* Formate */}
        <section className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <SectionHeading color={colors.strategicSparring}>Formate</SectionHeading>
            <div className="space-y-3">
              <ProductCard title="Kickstart Sessions" color={colors.kickstart} slug="kickstart" />
              <ProductCard title="Sales Impact" color={colors.salesImpact} slug="salesimpact" />
              <ProductCard title="Strategic Sparring" color={colors.strategicSparring} slug="strategicsparring" />
              <ProductCard title="Moderation & Workshops" color={colors.moderation} slug="moderation" />
              <ProductCard title="Team Flow" color={colors.teamFlow} slug="teamflow" />
              <ProductCard title="Face the Challenge" color="#5A5A5A" slug="facethechallenge" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            <div className="flex justify-between mb-12">
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-900">Impressum</button>
              <button onClick={() => setActivePage('datenschutz')} className="hover:text-gray-900">Datenschutz</button>
            </div>
            <p>© {new Date().getFullYear()} Sven Müller Consulting</p>
          </div>
        </footer>
      </div>
    );
  }

  // FORMATE PAGE
  if (activePage === 'formate') {
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }} className="bg-white text-gray-900">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <button onClick={() => setActivePage('home')} className="font-medium text-lg" style={{ color: colors.strategicSparring }}>Sven Müller</button>
            <div className="flex gap-8 text-sm">
              <button onClick={() => setActivePage('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => setActivePage('formate')} className="hover:text-gray-600">Formate</button>
              <button onClick={() => setActivePage('kontakt')} className="hover:text-gray-600">Kontakt</button>
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-600">Impressum</button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium mb-8" style={{ color: colors.strategicSparring }}>Formate</h1>
          <p className="text-gray-600 mb-12">Wähle ein Format für mehr Informationen:</p>
          
          <div className="space-y-3">
            <ProductCard title="Kickstart Sessions" color={colors.kickstart} slug="kickstart" />
            <ProductCard title="Sales Impact" color={colors.salesImpact} slug="salesimpact" />
            <ProductCard title="Strategic Sparring" color={colors.strategicSparring} slug="strategicsparring" />
            <ProductCard title="Moderation & Workshops" color={colors.moderation} slug="moderation" />
            <ProductCard title="Team Flow" color={colors.teamFlow} slug="teamflow" />
            <ProductCard title="Face the Challenge" color="#5A5A5A" slug="facethechallenge" />
          </div>
        </div>

        <footer className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            <div className="flex justify-between mb-12">
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-900">Impressum</button>
              <button onClick={() => setActivePage('datenschutz')} className="hover:text-gray-900">Datenschutz</button>
            </div>
            <p>© {new Date().getFullYear()} Sven Müller Consulting</p>
          </div>
        </footer>
      </div>
    );
  }

  // PRODUCT PAGES
  const products = {
    kickstart: {
      title: 'Kickstart Sessions',
      color: colors.kickstart,
      einordnung: 'Intensive eintägige Formate für Führungskräfte und Teams, die in zentralen Fragen zu Klarheit und Entscheidungen gelangen möchten.',
      kontext: 'Eine Kickstart Session bündelt fokussierte Arbeit an einer konkreten Herausforderung in komprimierter Form. Der Format schafft den Raum, um eine Frage von mehreren Seiten zu durchdringen, Optionen zu entwickeln und zu belastbaren Entscheidungen zu kommen.',
      arbeitsfokus: 'Präzise Klärung der zentralen Herausforderung · Strukturierte Entwicklung von Handlungsoptionen · Bewertung von Alternativen · Festlegung konkreter nächster Schritte',
      wirkung: 'Teilnehmende gewinnen Klarheit, treffen fundierte Entscheidungen und verfügen über einen konkreten Plan zur Umsetzung.',
      setup: 'Eintägiges Format (8-10 Stunden), max. 8 Personen, flexibel vor Ort oder virtuell.'
    },
    salesimpact: {
      title: 'Sales Impact',
      color: colors.salesImpact,
      einordnung: 'Ein entwicklerisches Format für Vertriebs- und Führungsteams, die ihre Leistung und ihren strategischen Fokus stärken möchten.',
      kontext: 'Sales Impact verbindet strategisches Denken mit praktischer Umsetzung. Wir arbeiten an der Schnittstelle von Marktverständnis, Kundenorientierung und einer tragfähigen Leistungskultur – nicht als theoretisches Seminar, sondern als konkrete Weiterentwicklung.',
      arbeitsfokus: 'Marktposition und Kundenverständnis · Akquisitionsstrategie und Vertriebsmodell · Rollen und gegenseitige Verantwortung · Leistungskultur und Zusammenarbeit im Team',
      wirkung: 'Teams entwickeln eine gemeinsame vertriebliche Stoßrichtung, klare Rollen und eine Kultur der gegenseitigen Unterstützung. Die Leistungsfähigkeit des Teams wächst messbar.',
      setup: 'Multi-Session-Format (Kickoff + 3-4 Sessions à 4 Stunden über 8-12 Wochen) oder intensives Seminarformat nach Bedarf.'
    },
    teamflow: {
      title: 'Team Flow',
      color: colors.teamFlow,
      einordnung: 'Ein Entwicklungsformat für Teams, die bereits solide funktionieren und ihre Leistungsfähigkeit sowie Zusammenarbeit gezielt vertiefen möchten.',
      kontext: 'Team Flow arbeitet an den Mustern, die Zusammenarbeit bereichern oder bremsen. Wir schaffen Räume für Reflexion und echte Entwicklung – mit dem Ziel, dass Teams schneller, klarer und vertrauensvoller zusammenarbeiten.',
      arbeitsfokus: 'Kommunikationsmuster und gegenseitiges Vertrauen · Rollen, Verantwortung und gegenseitige Erwartungen · Umgang mit Divergenzen und Widerständen · Entscheidungsfähigkeit und Geschwindigkeit',
      wirkung: 'Teams erleben tiefere gegenseitige Verbindung und höheres Vertrauen. Entscheidungen entstehen schneller und werden breiter getragen. Die Qualität der Zusammenarbeit nimmt deutlich zu.',
      setup: 'Multi-Session-Format mit Feldarbeit zwischen den Terminen oder mehrere intensive Tage vor Ort.'
    },
    strategicsparring: {
      title: 'Strategic Sparring',
      color: colors.strategicSparring,
      einordnung: 'Ein kollegiales Sparring-Format für Gründer, Führungskräfte und Organisationen in strategischen Fragen und Übergängen.',
      kontext: 'Strategic Sparring ist Kernarbeit: das Denken zu strategischen Fragen an der Seite eines erfahrenen Partners. Ob es um Geschäftsentwicklung, Markenpositionierung, Organisationsdesign oder komplexe Führungsherausforderungen geht – ich bin dein Sparringspartner.',
      arbeitsfokus: 'Strategische Klarheit und Positionierung · Geschäftsmodell und Wertschöpfung · Organisationsentwicklung · Führungsherausforderungen und Teamentwicklung · Entscheidungsqualität',
      wirkung: 'Du erhältst eine scharfsinnige externe Perspektive, fundierte Reflexion auf deine Herausforderungen und triffst bessere Entscheidungen schneller.',
      setup: 'Flexibel gestaltet: Einzelne Sessions (2-4 Stunden) oder Retainer-Modelle über 3-12 Monate.'
    },
    moderation: {
      title: 'Moderation & Workshops',
      color: colors.moderation,
      einordnung: 'Ein Facilitator-Format für Organisationen, die komplexe Entscheidungsprozesse und Strategieprozesse strukturiert moderieren möchten.',
      kontext: 'Ich moderiere Workshops, Strategieprozesse und große Gruppenprozesse mit klarer Struktur, echtem Ergebnisfokus und einem Verständnis für Gruppendynamiken. In diesem Kontext arbeite ich unter anderem als Moderator im Rahmen von CoCreate – einem Netzwerk für Führungskräfte und Organisationen, das auf den Austausch und die gemeinsame Entwicklung komplexer Themen ausgerichtet ist.',
      arbeitsfokus: 'Prozessdesign und Facilitation · Gruppendynamiken nutzen · Konstruktiver Umgang mit Divergenzen · Partizipation und Verbindlichkeit',
      wirkung: 'Gruppen kommen schneller zu tragfähigen Lösungen. Entscheidungen entstehen aus echtem Verständnis, nicht aus Kompromiss. Commitment zur Umsetzung ist von Beginn an vorhanden.',
      setup: 'Einzelne Workshops bis zu mehrteiligen Strategieprozessen – in Größe und Dauer an deine Herausforderung angepasst.'
    },
    facethechallenge: {
      title: 'Face the Challenge',
      color: '#5A5A5A',
      einordnung: 'Ein Coaching- und Entwicklungsformat für Führungskräfte und Teams, die ihre Handlungsfähigkeit unter Druck gezielt stärken möchten – basierend auf der „F.A.C.E. the Challenge"-Methode von Dr. Wladimir Klitschko.',
      kontext: 'Face the Challenge richtet sich an Führungskräfte und Teams vor anspruchsvollen Herausforderungen oder in Phasen, in denen es um aktive Transformation und Neuausrichtung geht. Das Format nutzt bewährte Methoden zur Entwicklung mentaler Klarheit und nachhaltiger Handlungsfähigkeit.',
      arbeitsfokus: 'Mentale Klarheit unter Druck · Fokus und Zielorientierung · Anpassungsfähigkeit und Lernfähigkeit · Ausdauer und Durchsetzungsfähigkeit · Persönliche und organisationale Willenskraft',
      wirkung: 'Führungskräfte und Teams entwickeln stärkere innere Stabilität, höhere Klarheit in Krisensituationen und die Fähigkeit, Veränderungen aktiv und nachhaltig zu gestalten.',
      setup: 'Flexible Formate je nach Zielgruppe und Herausforderung – von Einzelcoachings bis zu Teamformaten.',
      ctaLink: 'https://klitschko.com/de/tags/facethechallenge',
      ctaText: 'Face the Challenge'
    }
  };

  if (products[activePage]) {
    const product = products[activePage];
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }} className="bg-white text-gray-900">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <button onClick={() => setActivePage('home')} className="font-medium text-lg" style={{ color: colors.strategicSparring }}>Sven Müller</button>
            <div className="flex gap-8 text-sm">
              <button onClick={() => setActivePage('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => setActivePage('formate')} className="hover:text-gray-600">Formate</button>
              <button onClick={() => setActivePage('kontakt')} className="hover:text-gray-600">Kontakt</button>
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-600">Impressum</button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium mb-12" style={{ color: product.color }}>
            {product.title}
          </h1>

          <div className="space-y-12 max-w-2xl">
            <section>
              <h2 className="text-lg font-medium mb-3" style={{ color: product.color }}>Einordnung</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.einordnung}</p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3" style={{ color: product.color }}>Kontext</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.kontext}</p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3" style={{ color: product.color }}>Arbeitsfokus</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.arbeitsfokus}</p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3" style={{ color: product.color }}>Wirkung</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.wirkung}</p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3" style={{ color: product.color }}>Setup</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.setup}</p>
            </section>
          </div>

          <a 
            href={product.ctaLink || "https://bit.ly/Catch-Up_Sven"}
            target={product.ctaLink ? "_blank" : "_self"}
            rel={product.ctaLink ? "noopener noreferrer" : ""}
            style={{ backgroundColor: product.color }}
            className="inline-block px-6 py-3 text-white font-medium rounded text-sm hover:opacity-90 transition mt-12"
          >
            {product.ctaText || 'Termin vereinbaren'}
          </a>
        </div>

        <footer className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            <div className="flex justify-between mb-12">
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-900">Impressum</button>
              <button onClick={() => setActivePage('datenschutz')} className="hover:text-gray-900">Datenschutz</button>
            </div>
            <p>© {new Date().getFullYear()} Sven Müller Consulting</p>
          </div>
        </footer>
      </div>
    );
  }

  // KONTAKT PAGE
  if (activePage === 'kontakt') {
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }} className="bg-white text-gray-900">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <button onClick={() => setActivePage('home')} className="font-medium text-lg" style={{ color: colors.strategicSparring }}>Sven Müller</button>
            <div className="flex gap-8 text-sm">
              <button onClick={() => setActivePage('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => setActivePage('formate')} className="hover:text-gray-600">Formate</button>
              <button onClick={() => setActivePage('kontakt')} className="hover:text-gray-600">Kontakt</button>
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-600">Impressum</button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium mb-12" style={{ color: colors.strategicSparring }}>Kontakt</h1>

          <div className="max-w-2xl space-y-8">
            {/* LinkedIn */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-lg font-medium mb-3" style={{ color: colors.strategicSparring }}>LinkedIn</h2>
              <p className="text-gray-600 text-sm mb-4">Für Einblicke, aktuelle Themen und direkte Vernetzung</p>
              <a 
                href="https://www.linkedin.com/in/sven-mueller-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: colors.strategicSparring }}
                className="inline-block px-6 py-3 text-white font-medium rounded text-sm hover:opacity-90 transition"
              >
                Profil ansehen
              </a>
            </section>

            {/* Termin */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-lg font-medium mb-3" style={{ color: colors.strategicSparring }}>Termin vereinbaren</h2>
              <a 
                href="https://bit.ly/Catch-Up_Sven"
                style={{ backgroundColor: colors.strategicSparring }}
                className="inline-block px-6 py-3 text-white font-medium rounded text-sm hover:opacity-90 transition"
              >
                Termin buchen
              </a>
            </section>

            {/* E-Mail */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-lg font-medium mb-3" style={{ color: colors.strategicSparring }}>E-Mail</h2>
              <p className="text-gray-600 text-sm">
                sven [at] svenmueller.consulting
              </p>
            </section>

            {/* Telefon */}
            <section className="border-b border-gray-200 pb-8">
              <h2 className="text-lg font-medium mb-3" style={{ color: colors.strategicSparring }}>Telefon</h2>
              <p className="text-gray-600 text-sm">
                <a href="tel:+49160965818832" className="hover:text-gray-900">+49 160 96581832</a>
              </p>
            </section>

            {/* Standort */}
            <section>
              <h2 className="text-lg font-medium mb-3" style={{ color: colors.strategicSparring }}>Standort</h2>
              <p className="text-gray-600 text-sm">
                Standort Hamburg – deutschlandweit tätig, regelmäßig in Berlin sowie im Raum Stuttgart / Schwarzwald.
              </p>
            </section>
          </div>
        </div>

        <footer className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            <div className="flex justify-between mb-12">
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-900">Impressum</button>
              <button onClick={() => setActivePage('datenschutz')} className="hover:text-gray-900">Datenschutz</button>
            </div>
            <p>© {new Date().getFullYear()} Sven Müller Consulting</p>
          </div>
        </footer>
      </div>
    );
  }

  // IMPRESSUM PAGE
  if (activePage === 'impressum') {
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }} className="bg-white text-gray-900">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <button onClick={() => setActivePage('home')} className="font-medium text-lg" style={{ color: colors.strategicSparring }}>Sven Müller</button>
            <div className="flex gap-8 text-sm">
              <button onClick={() => setActivePage('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => setActivePage('formate')} className="hover:text-gray-600">Formate</button>
              <button onClick={() => setActivePage('kontakt')} className="hover:text-gray-600">Kontakt</button>
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-600">Impressum</button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium mb-8" style={{ color: colors.strategicSparring }}>Impressum</h1>

          <div className="max-w-2xl space-y-6 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-medium mb-3 text-gray-900">Angaben gem. § 5 TMG</h2>
              <p>
                Sven Müller<br />
                Bei der Flottbeker Mühle 1D<br />
                22607 Hamburg
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3 text-gray-900">Kontakt</h2>
              <p>
                Telefon: <a href="tel:+49160965818832" className="hover:text-gray-900">+49 160 96581832</a><br />
                E-Mail: <a href="mailto:impressum@svenmueller.consulting" className="hover:text-gray-900">impressum@svenmueller.consulting</a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3 text-gray-900">Haftungsausschluss</h2>
              <p>
                Die Inhalte unserer Seiten wurden mit großer Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>
          </div>
        </div>

        <footer className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            <div className="flex justify-between mb-12">
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-900">Impressum</button>
              <button onClick={() => setActivePage('datenschutz')} className="hover:text-gray-900">Datenschutz</button>
            </div>
            <p>© {new Date().getFullYear()} Sven Müller Consulting</p>
          </div>
        </footer>
      </div>
    );
  }

  // DATENSCHUTZ PAGE
  if (activePage === 'datenschutz') {
    return (
      <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif' }} className="bg-white text-gray-900">
        <nav className="border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <button onClick={() => setActivePage('home')} className="font-medium text-lg" style={{ color: colors.strategicSparring }}>Sven Müller</button>
            <div className="flex gap-8 text-sm">
              <button onClick={() => setActivePage('home')} className="hover:text-gray-600">Home</button>
              <button onClick={() => setActivePage('formate')} className="hover:text-gray-600">Formate</button>
              <button onClick={() => setActivePage('kontakt')} className="hover:text-gray-600">Kontakt</button>
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-600">Impressum</button>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium mb-8" style={{ color: colors.strategicSparring }}>Datenschutz</h1>

          <div className="max-w-2xl space-y-6 text-sm text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-medium mb-3 text-gray-900">Datenschutzerklärung</h2>
              <p>
                Diese Website verwendet keine Cookies und erhebt keine persönlichen Daten. Termine werden über Calendly verwaltet. Für die Datenschutzbestimmungen verweisen wir auf die <a href="https://calendly.com/privacy" target="_blank" className="hover:text-gray-900 underline">Datenschutzrichtlinien von Calendly</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3 text-gray-900">Externe Links</h2>
              <p>
                Diese Website enthält Links zu externen Webseiten Dritter. Für den Inhalt dieser externen Seiten sind wir nicht verantwortlich. Die Betreiber der verlinkten Seiten sind selbst für die Einhaltung der Datenschutzbestimmungen verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-3 text-gray-900">Kontakt</h2>
              <p>
                Für Fragen zum Datenschutz kontaktieren Sie uns bitte unter:<br />
                <a href="mailto:impressum@svenmueller.consulting" className="hover:text-gray-900">impressum@svenmueller.consulting</a>
              </p>
            </section>
          </div>
        </div>

        <footer className="border-t border-gray-200 bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            <div className="flex justify-between mb-12">
              <button onClick={() => setActivePage('impressum')} className="hover:text-gray-900">Impressum</button>
              <button onClick={() => setActivePage('datenschutz')} className="hover:text-gray-900">Datenschutz</button>
            </div>
            <p>© {new Date().getFullYear()} Sven Müller Consulting</p>
          </div>
        </footer>
      </div>
    );
  }
}
