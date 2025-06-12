"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Harry Lewis",
    designation: "Software Engineer",
    image: "/harry.webp",
  },
  {
    id: 2,
    name: "George Clarke",
    designation: "IT",
    image: "/IMG_2754.avif",
  },
  {
    id: 3,
    name: "Simon Minter",
    designation: "Software Engineer",
    image: "/simon.jpeg",
  },
  {
    id: 4,
    name: "Talia",
    designation: "Software Engineer",
    image: "/talia.jpeg",
  },
  {
    id: 5,
    name: "Natalie",
    designation: "UI/UX",
    image: "/natalie.jpeg",
  },
  {
    id: 6,
    name: "Emilia",
    designation: "HR",
    image: "/emilia.jpeg",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-12 bg-background text-foreground">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Employee Mood Tracker
        </h1>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">
          Click on your profile to record how you're feeling today. It only takes a second.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <AnimatedTooltip items={people} />
      </div>
    </main>
  );
}
