/**
 * Zentrale Stammdaten der Schule.
 * Hinweis: Kontaktdaten stammen aus öffentlichen Verzeichnissen und müssen
 * vor dem Livegang von der Schule bestätigt werden.
 */
export const school = {
  name: 'Regionale Schule mit Grundschule „Dr. Ernst Alban“',
  shortName: 'Dr.-Ernst-Alban-Schule',
  town: 'Rastow',
  claim: 'Gemeinsam lernen. Neugierig bleiben. Zukunft bauen.',
  street: 'Schulstraße 5',
  zip: '19077',
  city: 'Rastow',
  phone: '03868 300683',
  phoneHref: '+493868300683',
  email: 'schulleiter@eas-rastow.de',
  officeHours: [
    { days: 'Montag – Donnerstag', time: '7:00 – 15:00 Uhr' },
    { days: 'Freitag', time: '7:00 – 12:30 Uhr' },
  ],
  carrier: 'Gemeinde Rastow',
  itslearning: 'https://itslearning.com/',
};

export const nav = [
  { label: 'Über uns', href: 'ueber-uns/' },
  { label: 'Grundschule', href: 'grundschule/' },
  { label: 'Regionale Schule', href: 'regionale-schule/' },
  { label: 'Schulleben', href: 'schulleben/' },
  { label: 'Neuigkeiten', href: 'neuigkeiten/' },
  { label: 'Termine', href: 'termine/' },
  { label: 'Service', href: 'service/' },
  { label: 'Kontakt', href: 'kontakt/' },
];

/** Baut einen Pfad relativ zur konfigurierten Basis-URL. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

const dateFmt = new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
export const formatDate = (d: Date) => dateFmt.format(d);

const dayFmt = new Intl.DateTimeFormat('de-DE', { day: '2-digit' });
const monFmt = new Intl.DateTimeFormat('de-DE', { month: 'short' });
const wdFmt = new Intl.DateTimeFormat('de-DE', { weekday: 'long' });
export const dateParts = (d: Date) => ({
  day: dayFmt.format(d).replace('.', ''),
  month: monFmt.format(d).replace('.', ''),
  weekday: wdFmt.format(d),
});
