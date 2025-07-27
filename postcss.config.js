module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
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
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 30s linear infinite",
        "fade-in-left": "fadeInLeft 0.8s ease-out both",
        "fade-in-right": "fadeInRight 0.8s ease-out both",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
