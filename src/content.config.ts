import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    category: z.enum(['Schule', 'Grundschule', 'Regionale Schule', 'Projekte', 'Sport']),
    motif: z.enum(['books', 'gear', 'sun', 'ball', 'leaf', 'star', 'compass']).default('star'),
  }),
});

const termine = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/termine' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    end: z.coerce.date().optional(),
    time: z.string().optional(),
    location: z.string().optional(),
    category: z.enum(['Schule', 'Grundschule', 'Regionale Schule', 'Ferien', 'Eltern']),
  }),
});

const ags = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ags' }),
  schema: z.object({
    title: z.string(),
    grades: z.string(),
    day: z.string(),
    motif: z.enum(['books', 'gear', 'sun', 'ball', 'leaf', 'star', 'music', 'paint']),
    order: z.number().default(0),
  }),
});

export const collections = { news, termine, ags };
