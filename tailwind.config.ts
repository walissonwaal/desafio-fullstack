import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#519DA7',
        // secondary: '#3c3c3c',
        success: '#4AB573',
        warning: '#B59A4A',
        error: '#B5554A',
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
