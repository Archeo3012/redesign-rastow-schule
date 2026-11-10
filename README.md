# Neue Website – Ernst-Alban-Schule Rastow

Moderner Neuentwurf der Website der **Regionalen Schule mit Grundschule „Dr. Ernst Alban“** in Rastow (bisher: schule-rastow.de).

> **Status: Designentwurf.** Kontaktdaten stammen aus öffentlichen Verzeichnissen, Texte, Termine und Namen sind Platzhalter und müssen von der Schule geprüft bzw. ergänzt werden.

## Highlights

- ⚡ **Schnell & schlank** – statische Seiten mit [Astro](https://astro.build), fast kein JavaScript
- 📱 **Mobile first** – optimiert für Smartphones, mit Burger-Menü
- 🌗 **Hell- & Dunkelmodus** – automatisch nach Systemeinstellung, umschaltbar
- ♿ **Barrierearm** – gut lesbare Schrift (Atkinson Hyperlegible), Skip-Link, Tastaturbedienung, Kontraste nach WCAG AA, reduzierte Animationen auf Wunsch
- 🔒 **Datensparsam** – keine Cookies, kein Tracking, Schriften lokal, Karte erst nach Zustimmung
- ✏️ **Einfach pflegbar** – Neuigkeiten, Termine und AGs sind einfache Markdown-Dateien

## Seiten

Startseite · Über uns (inkl. Namensgeber) · Grundschule · Regionale Schule · Schulleben (AGs) · Neuigkeiten · Termine (mit Filter) · Service für Eltern · Kontakt · Impressum · Datenschutz · 404

## Lokal starten

```bash
npm install
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # statische Seite nach ./dist
npm run preview  # Build ansehen
```

## Inhalte pflegen

| Was | Wo | Hinweis |
|---|---|---|
| Neuigkeiten | `src/content/news/*.md` | `title`, `date`, `excerpt`, `category`, `motif` + Text |
| Termine | `src/content/termine/*.md` | `title`, `date`, optional `end`, `time`, `location`, `category` |
| AGs | `src/content/ags/*.md` | `title`, `grades`, `day`, `motif`, `order` + Kurztext |
| Adresse, Telefon, Zeiten | `src/lib/site.ts` | zentral für die ganze Website |
| Farben & Schriften | `src/styles/global.css` | Design-Tokens ganz oben |

Beispiel für einen neuen Termin (`src/content/termine/sommerfest.md`):

```markdown
---
title: Sommerfest
date: 2027-06-25
time: "14:00 Uhr"
location: Schulhof
category: Schule
---
Mit Tombola, Spielstationen und Grill.
```

Vergangene Termine werden automatisch ausgeblendet.

## Veröffentlichung

Der Workflow `.github/workflows/deploy.yml` veröffentlicht die Seite bei jedem Push auf `main` über GitHub Pages
(in den Repo-Einstellungen unter *Pages* → *Source: GitHub Actions* aktivieren). Bei eigener Domain
(`schule-rastow.de`) die Variablen `SITE_URL`/`BASE_PATH` im Workflow entfernen.

## Vor dem Livegang

- [ ] Kontaktdaten, Sekretariatszeiten und Koordinaten der Karte prüfen
- [ ] Echte Texte und Fotos (mit Einverständnis) einsetzen
- [ ] Namen im Team-Bereich ergänzen
- [ ] Impressum und Datenschutzerklärung rechtlich prüfen lassen
- [ ] Links zu itslearning, Mensa und Schulbus eintragen
- [ ] Hinweis „Designentwurf“ in `src/components/Header.astro` entfernen
