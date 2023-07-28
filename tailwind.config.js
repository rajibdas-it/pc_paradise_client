/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34a0ff",
          secondary: "#333333",
          success: "#159d47",
          warning: "#f6c25a",
          error: "#e5513e",
          background: "#f7f7f7",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
