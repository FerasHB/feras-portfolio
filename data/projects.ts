export type Project = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    title: 'Vendo',
    subtitle: 'Mobile Shopping App (iOS)',
    description:
      'Eine iOS-App, die den kompletten Ablauf eines einfachen Shopping-Systems abbildet – von der Produktübersicht bis zum Warenkorb. Der Fokus lag auf einer klaren Struktur, sauberem UI und einer gut nachvollziehbaren App-Logik.',
    features: [
      'Produktübersicht',
      'Favoriten-System',
      'Warenkorb',
      'MVVM Architektur',
    ],
    tech: ['SwiftUI', 'Firebase', 'MVVM'],
    githubUrl: 'https://github.com/FerasHB/Vendo',
    gradient: 'from-[#20283A] via-[#27325A] to-[#151822]',
  },
  {
    title: 'Arbeitszeitrechner',
    subtitle: 'Mobile App (React Native / Expo)',
    description:
      'Eine App zur Berechnung von Arbeitszeiten, Pausen und Differenzen im Alltag. Ziel war es, eine einfache und schnelle Lösung zu bauen, die direkt nutzbar ist, ohne unnötige Komplexität.',
    features: [
      'Arbeitszeit berechnen',
      'Pausenlogik',
      'Zeit-Differenz',
      'Übersichtliche Darstellung',
    ],
    tech: ['React Native', 'Expo', 'TypeScript'],
    githubUrl: 'https://github.com/FerasHB/arbeitszeit-rechner',
    gradient: 'from-[#1E2433] via-[#2A3554] to-[#121721]',
  },
  {
    title: 'Corporate Website',
    subtitle: 'Business Website (Next.js)',
    description:
      'Eine moderne Unternehmenswebsite mit Fokus auf Struktur, klare Inhalte und professionelles Design. Ziel war es, eine starke digitale Präsenz für ein Industrieunternehmen aufzubauen.',
    features: [
      'Responsive Design',
      'Mehrsprachigkeit',
      'Moderne UI',
      'Strukturierte Inhalte',
    ],
    tech: ['Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/FerasHB',
    liveUrl: 'https://cement-corporate.vercel.app/?lang=en',
    gradient: 'from-[#1A2230] via-[#23304A] to-[#121720]',
  },
];