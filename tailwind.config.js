/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary:"#1C1C22",
			accent:{
				default:"#00ff99",
				hover:"#00e187"
			}
  		},		  
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		
  	},

	  container:{
		center:true,
		padding:"22px",
	},
	screens:{
		sm:"640px",
		md:"768px",
		lg:"960px",
		xl:"1200px",
		
	},
	fontFamily:{
		primary:"var(--font-jetbrainsMono)"
	}
  },
  plugins: [require("tailwindcss-animate")],
};
