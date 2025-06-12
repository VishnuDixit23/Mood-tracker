"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function MoodPage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  const [moodValue, setMoodValue] = useState<number>(50);

  const getMood = (value: number) => {
    if (value <= 33) return { label: "😞 Sad", value: "sad" };
    if (value <= 66) return { label: "😐 Neutral", value: "neutral" };
    return { label: "😄 Happy", value: "happy" };
  };

  const mood = getMood(moodValue);

  const employeeMap: Record<number, string> = {
    1: "Harry Lewis",
    2: "George Clarke",
    3: "Simon Minter",
    4: "Talia",
    5: "Natalie",
    6: "Emilia",
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employeeId: id,
        mood: mood.value,
        comment: "",
        timestamp: new Date().toISOString(),
      }),
    });

    if (res.ok) {
      toast.success("Mood submitted successfully!");
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 py-12">
      <div className="bg-card border rounded-2xl shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-2">
          Hello, {employeeMap[id] || `Employee #${id}`}
        </h1>
        <p className="text-muted-foreground text-center mb-6">
          Use the slider below to tell us how you&apos;re feeling today.
        </p>

        <div className="w-full">
          <Slider
            defaultValue={[moodValue]}
            max={100}
            step={1}
            onValueChange={(val) => setMoodValue(val[0])}
          />
          <div className="mt-4 text-center text-3xl font-semibold">
            {mood.label}
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          className="mt-8 w-full text-lg"
        >
          Submit Mood
        </Button>
      </div>
    </main>
  );
}
