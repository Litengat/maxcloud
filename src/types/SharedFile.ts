export type SharedFile = {
  id: string;
  path: string;
  sharedBy: string;
  secured: boolean;
  sharedWith: string[];
};
