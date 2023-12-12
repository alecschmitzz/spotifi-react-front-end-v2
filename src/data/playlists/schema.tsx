import { z } from "zod";
import { songsSchema } from "../songs/schema";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const playlistSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  songs: z.optional(z.array(songsSchema)), // Make songs optional
  // userId: z.number(),
});

export type Playlist = z.infer<typeof playlistSchema>;
