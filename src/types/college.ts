import { z } from 'zod';

export const CollegeSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.string(),
  image: z.string(),
  rank: z.number().optional(),
  acceptance: z.string(),
  enrollment: z.string(),
  tuition: z.string(),
  programs: z.array(z.string()),
  isFavorite: z.boolean(),
  category: z.enum(['reach', 'target', 'safety']),
  details: z.object({
    satRange: z.string().optional(),
    actRange: z.string().optional(),
    graduationRate: z.string().optional(),
    retentionRate: z.string().optional(),
    studentFacultyRatio: z.string().optional(),
    ranking: z.object({
      national: z.number().optional(),
      liberal_arts: z.number().optional(),
      public: z.number().optional(),
      engineering: z.number().optional(),
      business: z.number().optional(),
    }).optional(),
  }),
});

export type College = z.infer<typeof CollegeSchema>;