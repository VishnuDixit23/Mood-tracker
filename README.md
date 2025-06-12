# 🧠 Mood Tracker

A sleek employee mood tracking app built with **Next.js 14**, **Tailwind CSS**, and **Shadcn UI**, featuring dark mode, sliders, and an admin dashboard.

<br />

## 🚀 Features

- 🎯 Employee mood submission with emoji slider
- 🎨 Fully responsive UI using Tailwind + Shadcn components
- 🌙 Light/Dark mode toggle with system preference
- 📊 Admin dashboard to view all mood logs
- ✅ Built with App Router and Server Actions

<br />

## 🖥️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes) (for theme switching)

<br />

## 📷 Screenshots

| Home Page                              | Mood Slider                            | Admin Dashboard                        |
|----------------------------------------|----------------------------------------|----------------------------------------|
| ![Home](public/screens/home.png)       | ![Mood](public/screens/mood.png)       | ![Admin](public/screens/admin.png)     |

> ⚠️ Add real screenshots in `public/screens/` folder to show off your UI.

<br />

## 🧑‍💼 How It Works

1. Employee lands on home page and clicks their avatar.
2. They're taken to `/person/[id]` to submit mood via slider.
3. Mood is stored in memory (via API route).
4. Admin can view all submissions in `/admin`.

<br />

## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/VishnuDixit23/mood-tracker.git

# 2. Install dependencies
cd mood-tracker
npm install

# 3. Run the dev server
npm run dev
