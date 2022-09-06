import { z } from 'zod';

export const Forecast = z.object({
  forecast: z.array(
    z.object({
      night: z.object({
        phenomenon: z.string(),
        tempmin: z.number().int(),
        tempmax: z.number().int(),
        text: z.string(),
        place: z.array(
          z.object({
            name: z.string(),
            phenomenon: z.string(),
            tempmin: z.number().int(),
          })
        ),
        wind: z.array(
          z.object({
            name: z.string(),
            direction: z.string(),
            speedmin: z.number().int(),
            speedmax: z.number().int(),
            gust: z.string(),
          })
        ),
        sea: z.string().nullable(),
        peipsi: z.string().nullable(),
      }),
      day: z.object({
        phenomenon: z.string(),
        tempmin: z.number().int(),
        tempmax: z.number().int(),
        text: z.string(),
        place: z.array(
          z.object({
            name: z.string(),
            phenomenon: z.string(),
            tempmax: z.number().int(),
          })
        ),
        wind: z.array(
          z.object({
            name: z.string(),
            direction: z.string(),
            speedmin: z.number().int(),
            speedmax: z.number().int(),
            gust: z.string(),
          })
        ),
        sea: z.string().nullable(),
        peipsi: z.string().nullable(),
      }),
    })
  ),
});
