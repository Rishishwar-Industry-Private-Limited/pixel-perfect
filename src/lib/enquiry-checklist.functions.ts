import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const createEnquiryChecklist = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ requirements: z.string().trim().min(15).max(3000) }).parse(data))
  .handler(async ({ data }) => {
    const { generateEnquiryChecklist } = await import("@/backend/enquiry-checklist.server");
    return generateEnquiryChecklist(data.requirements);
  });