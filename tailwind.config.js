// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // Corrected path to index.html.
//     // This assumes index.html is located directly inside the 'public' folder,
//     // and tailwind.config.js is in the root of your project.
//      "**/*.html",
//     // This path correctly includes all your .js, .jsx, .ts, .tsx files in the src directory and its subdirectories.
//     "./src/**/*.{js,jsx,ts,tsx}"
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
