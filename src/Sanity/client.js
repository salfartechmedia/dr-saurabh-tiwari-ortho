import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "pe9xoako",
  dataset: "production",
  apiVersion: "2026-08-04",
  useCdn: true,
});