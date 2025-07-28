module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        // Keep your existing rose palette
        rosePalette: {
          50: "#faf5f8",
          100: "#f5e9ef",
          200: "#e8cfdd",
          300: "#d4a5c0",
          400: "#bc749f",
          500: "#a45383",
          600: "#894069",
          700: "#703455",
          800: "#5e2e48",
          900: "#4f2b3e",
          950: "#0d070a",
        },
        // Add darker modern color palette
        modern: {
          slate: {
            50: "#f8fafc",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617",
          },
          purple: {
            300: "#c4a3fc",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764",
          },
          pink: {
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            950: "#500724",
          },
          blue: {
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            950: "#172554",
          },
        },
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(40px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 30s linear infinite",
        "fade-in-left": "fadeInLeft 0.8s ease-out both",
        "fade-in-right": "fadeInRight 0.8s ease-out both",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-down": "fadeInDown 0.8s ease-out both",
        "slide-in-left": "slideInFromLeft 0.8s ease-out both",
        "slide-in-right": "slideInFromRight 0.8s ease-out both",
        "scale-in": "scaleIn 0.6s ease-out both",
        pulse: "pulse 3s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      mixBlendMode: {
        multiply: "multiply",
      },
    },
  },
  plugins: [],
};
