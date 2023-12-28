import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FD7E0D',
        textColor: {
          main: '#667085',
          title: '#1D2939',
          clickable: '#344054', // nav colors, input text color
        },
      },
    },
  },
  plugins: [],
};
export default config;
