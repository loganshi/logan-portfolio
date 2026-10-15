// Populated only with successful real, public screenshots by the V3 assets workflow.
// A case without a captured image keeps the conceptual illustration from V2.
export type PublicCaseMedia = {
  desktop: string;
  mobile?: string;
  sourceUrl: string;
  capturedAt: string;
};
export const realProjectMedia: Partial<Record<string, PublicCaseMedia>> = {};
