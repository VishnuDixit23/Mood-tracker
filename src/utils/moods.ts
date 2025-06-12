export type MoodEntry = {
  employeeId: number;         // ✅ new field
  mood: "happy" | "neutral" | "sad";
  comment?: string;
  timestamp: string;
};

export const moods: MoodEntry[] = [];