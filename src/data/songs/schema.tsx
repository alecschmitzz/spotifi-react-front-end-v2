import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const songsSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  image: z.string(),
  album: z.string(),
  dateAdded: z.string(),
  duration: z.string(),
});

export type Song = z.infer<typeof songsSchema>;
