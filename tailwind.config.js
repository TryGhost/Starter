const COLOR_TOKENS = {
  ORANGE: {
    50:  "rgb(255, 251, 250)",
    100: "rgb(254, 244, 240)",
    200: "rgb(253, 221, 211)",
    300: "rgb(252, 184, 161)",
    400: "rgb(249, 128, 88)",
    500: "rgb(195, 52, 4)",
    600: "rgb(165, 44, 3)",
    700: "rgb(120, 32, 2)",
    800: "rgb(85, 23, 2)",
    900: "rgb(35, 9, 1)",
    "primary": "#FF460B",
  },
  PURPLE: {
    50:  "rgb(247, 246, 249)",
    100: "rgb(241, 239, 245)",
    150: "rgb(235, 233, 241)",
    200: "rgb(219, 214, 229)",
    300: "rgb(202, 196, 217)",
    400: "rgb(183, 175, 203)",
    500: "rgb(158, 147, 184)",
    600: "rgb(124, 110, 160)",
    700: "rgb(95, 83, 127)",
    800: "rgb(64, 55, 88)",
    900: "rgb(7, 6, 9)",
    "primary": "#1B1725",
  }
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        'display': ['"Advent Pro"', 'sans-serif'],
        'body': ['"Red Hat Display"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '0.75rem' }],
        'sm': ['0.875rem', { lineHeight: '0.875rem' }],
        'base': ['1rem', { lineHeight: '1rem' }],
        'lg': ['1.125rem', { lineHeight: '1.125rem' }],
        'xl': ['1.5rem', { lineHeight: '1.25rem' }],
        '2xl': ['2rem', { lineHeight: '1.75rem' }],
        '3xl': ['2.5rem', { lineHeight: '2.5rem' }],
        '4xl': ['4.5rem', { lineHeight: '4.5rem' }],
        '5xl': ['5.625rem', { lineHeight: '5.625rem' }],
      },
      colors: {
        orange: {...COLOR_TOKENS.ORANGE},
        purple: {...COLOR_TOKENS.PURPLE},
        white: '#F5F5F5',
        current: 'currentColor',
      },
    },
  },
  plugins: [],
}

