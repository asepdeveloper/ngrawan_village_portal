module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm earth brown, community foundation
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF6F0",
          100: "#F9E6D3",
          200: "#F2CCA7",
          300: "#E8A870",
          400: "#DC8441",
          500: "#8B4513", // saddle-brown
          600: "#7A3D11",
          700: "#66320E",
          800: "#52280B",
          900: "#3D1E08",
        },
        // Secondary Colors - Rice field green, growth prosperity
        secondary: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0F9F0",
          100: "#D4F1D4",
          200: "#A8E2A8",
          300: "#7DD37D",
          400: "#52C452",
          500: "#228B22", // forest-green
          600: "#1F7D1F",
          700: "#1A6B1A",
          800: "#155915",
          900: "#104710",
        },
        // Accent Colors - Sunset orange, celebration moments
        accent: {
          DEFAULT: "#FF8C00", // dark-orange
          50: "#FFF7E6",
          100: "#FFEACC",
          200: "#FFD599",
          300: "#FFC066",
          400: "#FFAB33",
          500: "#FF8C00", // dark-orange
          600: "#E67E00",
          700: "#CC7000",
          800: "#B36200",
          900: "#995400",
        },
        // Background Colors - Warm cream, comfortable reading
        background: {
          DEFAULT: "#FFF8DC", // cornsilk
          50: "#FFFEF9",
          100: "#FFFCF3",
          200: "#FFF8DC", // cornsilk
          300: "#FFF4C4",
          400: "#FFF0AC",
          500: "#FFEC94",
          600: "#E6D485",
          700: "#CCBC76",
          800: "#B3A467",
          900: "#998C58",
        },
        // Surface Colors - Subtle beige, gentle content separation
        surface: {
          DEFAULT: "#F5F5DC", // beige
          50: "#FEFEFE",
          100: "#FCFCF9",
          200: "#F5F5DC", // beige
          300: "#EEEECC",
          400: "#E7E7BC",
          500: "#E0E0AC",
          600: "#CACA9B",
          700: "#B4B48A",
          800: "#9E9E79",
          900: "#888868",
        },
        // Text Colors
        text: {
          primary: "#2F4F4F", // dark-slate-gray
          secondary: "#696969", // dim-gray
        },
        // Status Colors
        success: "#32CD32", // lime-green
        warning: "#FFD700", // gold
        error: "#CD5C5C", // indian-red
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}