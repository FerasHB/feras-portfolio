export type Project = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  type: string;
  status: string;
  role: string;
};

export const projects: Project[] = [
  {
    title: 'Cleaning Employee App',
    subtitle: 'Interne Mitarbeiter-App (React Native / Expo)',
    description:
      'Eine interne Mobile App für Reinigungsfirmen zur Verwaltung von Mitarbeitenden, Einsätzen und Aufgaben. Die Anwendung unterstützt rollenbasierte Abläufe (Admin / Mitarbeiter) und ermöglicht Status-Updates in Echtzeit. Der Fokus lag auf klaren Prozessen, einer sauberen Architektur und einer Lösung, die im Arbeitsalltag wirklich nutzbar ist.',
    features: [
      'Auftragsverwaltung (Erstellen & Zuweisen)',
      'Rollenbasiertes System (Admin / Mitarbeiter)',
      'Realtime Status-Updates',
      'Strukturierte App-Architektur',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/FerasHB/cleaning-ops-app.git',
    gradient: 'from-[#1B2333] via-[#26365A] to-[#121721]',
    type: 'Internal Tool',
    status: 'In Development',
    role: 'Full App Development (Frontend + Backend)',
  },

  {
    title: 'Vendo',
    subtitle: 'Mobile Shopping App (iOS)',
    description:
      'Eine iOS-App zur Umsetzung eines einfachen Shopping-Workflows – von der Produktübersicht bis zum Warenkorb. Der Fokus lag auf einer sauberen MVVM-Architektur, klarer Navigation und nachvollziehbarer Zustandsverwaltung innerhalb der App.',
    features: [
      'Produktübersicht & Detailansicht',
      'Favoriten-System',
      'Warenkorb-Logik',
      'MVVM Architektur',
    ],
    tech: ['SwiftUI', 'Firebase', 'MVVM'],
    githubUrl: 'https://github.com/FerasHB/Vendo',
    gradient: 'from-[#20283A] via-[#27325A] to-[#151822]',
    type: 'Mobile App',
    status: 'Completed',
    role: 'iOS Development & UI Architecture',
  },

  {
    title: 'Arbeitszeitrechner',
    subtitle: 'Mobile App (React Native / Expo)',
    description:
      'Eine Mobile App zur Berechnung von Arbeitszeiten, Pausen und Differenzen im Alltag. Ziel war es, eine schnelle und verständliche Lösung zu entwickeln, die ohne komplexe Bedienung direkt genutzt werden kann.',
    features: [
      'Berechnung von Arbeitszeiten',
      'Automatische Pausenlogik',
      'Zeit-Differenzen',
      'Klare und einfache UI',
    ],
    tech: ['React Native', 'Expo', 'TypeScript'],
    githubUrl: 'https://github.com/FerasHB/arbeitszeit-rechner',
    gradient: 'from-[#1E2433] via-[#2A3554] to-[#121721]',
    type: 'Mobile App',
    status: 'Completed',
    role: 'App Development & UI Implementation',
  },

  {
    title: 'Corporate Website',
    subtitle: 'Business Website (Next.js)',
    description:
      'Eine moderne Unternehmenswebsite mit Fokus auf strukturierte Inhalte, klare Navigation und professionelle Darstellung. Entwickelt mit Next.js und TypeScript für eine performante und skalierbare Weblösung.',
    features: [
      'Responsive Design',
      'Mehrsprachigkeit (DE/EN)',
      'Saubere Komponentenstruktur',
      'Optimierte Performance',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/FerasHB',
    liveUrl: 'https://cement-corporate.vercel.app/?lang=en',
    gradient: 'from-[#1A2230] via-[#23304A] to-[#121720]',
    type: 'Web Project',
    status: 'Completed',
    role: 'Frontend Development & UI Implementation',
  },
];