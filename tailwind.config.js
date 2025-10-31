/** @type {import('tailwindcss').Types.Config} */
module.exports = {
content: [
'./pages/**/*.{js,ts,jsx,tsx,mdx}',
'./components/**/*.{js,ts,jsx,tsx,mdx}',
'./app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
colors: {
primary: '#3c6be1',
},
},
},
plugins: [],
}
