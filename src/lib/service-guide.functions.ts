import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getServiceRecommendation = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ idea: z.string().trim().min(15).max(3000) }).parse(data))
  .handler(async ({ data }) => {
    const { recommendService } = await import("@/backend/service-guide.server");
    return recommendService(data.idea);
  });
