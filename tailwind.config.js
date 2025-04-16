/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"    
  ],
  theme: {
    extend: {
      fontFamily:{      
      Plus : ["Plus Jakarta Sans", "sans-serif"]
      },
      container:{
        center:true,
        padding:'12px',
      },
     
      fontSize:{
        sm:'14px',
        md:'16px',
        lg:'18px',
        xl:'24px',
        fs2xl:'48px',
        fs3xl:'60px',
        fs4xl:'64px',
      },
      boxShadow:{        
        'media': '0px 0px 20px 1px #ffffff'
      }                              
    },
  },  
  plugins: [],
}


