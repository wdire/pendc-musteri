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
        grayStrokeColor: '#EAECF0',
        background: '#F9FAFB',
        table: {
          striped: '#F9FAFB',
          stroke: '#EAECF0',
          textColor: '#475467',
        },
        theme: {
          red: {
            100: '#FEF3F2',
            700: '#B42318',
          },
          green: {
            100: '#ECFDF3',
            800: '#027A48',
          },
          gray: {
            700: '#344054',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
