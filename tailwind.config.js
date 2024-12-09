/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F5F5DC", // Soft Beige
          text: "#4A4A4A", // Dark Warm Gray
          subtext: "#6B7280", // Example light subtext color
          accent: "#F6E6D8", // Light peach
          accent1: "#E07A5F", // Warm Terracotta
          accent2: "#F4A261", // Soft Coral
          accent3: "#81B29A", // Olive Green
          card: "#FFFFFF", // White for light mode cards
        },
        dark: {
          background: "#2D2A32", // Deep Charcoal Gray
          text: "#EAE7DC", // Warm Light Beige
          subtext: "#A0A0A0", // Example dark subtext color
          accent: "#2B343B", // Lighter charcoal
          accent1: "#EF8354", // Burnt Orange
          accent2: "#F2CC8F", // Muted Gold
          accent3: "#547C5F", // Deep Forest Green
          card: "#2C2C2C", // Soft charcoal for dark mode cards
        },
        
      },
    },
  },
  plugins: [],
};
