"use client";

import { useEffect, useState } from "react";
import { columns, MoodEntry } from "./columns";
import { DataTable } from "./data-table";
import { Loader2, Frown } from "lucide-react";

export default function AdminPage() {
  const [data, setData] = useState<MoodEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const res = await fetch("/api/mood");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch moods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, []);

  return (
    <main className="min-h-screen w-full bg-background text-foreground px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">📊 Mood Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Track how your employees are feeling throughout the day.
        </p>

        <div className="bg-card border rounded-xl shadow-sm p-6">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : data.length === 0 ? (
            <div className="flex flex-col items-center text-center py-16 text-muted-foreground">
              <Frown className="w-10 h-10 mb-2" />
              <p className="text-sm italic">No moods submitted yet.</p>
            </div>
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </main>
  );
}
