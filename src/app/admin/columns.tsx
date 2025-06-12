
"use client";

import { ColumnDef } from "@tanstack/react-table";

export type MoodEntry = {
  mood: "happy" | "neutral" | "sad";
  comment?: string;
  timestamp: string;
};

export const columns: ColumnDef<MoodEntry>[] = [
  {
  accessorKey: "employeeId",
  header: "Employee",
  cell: ({ row }) => {
    const id = row.getValue("employeeId") as number; 
    return <span className="font-medium">#{id}</span>;
  },
},

  {
    accessorKey: "mood",
    header: "Mood",
    cell: ({ row }) => {
      const mood = row.getValue("mood") as string;
      const emoji =
        mood === "happy" ? "😄" : mood === "neutral" ? "😐" : "😞";
      return (
        <div className="text-xl">
          {emoji} <span className="ml-2 capitalize">{mood}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "comment",
    header: "Comment",
    cell: ({ row }) =>
      row.getValue("comment") ? (
        <span>{row.getValue("comment")}</span>
      ) : (
        <span className="text-gray-400 italic">No comment</span>
      ),
  },
  {
    accessorKey: "timestamp",
    header: "Submitted At",
    cell: ({ row }) => {
      const raw = row.getValue("timestamp") as string;
      const date = new Date(raw);
      return (
        <span>{date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</span>
      );
    },
  },
];
