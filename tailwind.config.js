module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          whitish: 'var(--whitish)',
          grey: 'var(--grey)',
          greyish: 'var(--greyish)',
          'primary-color': 'var(--primary-color)',
          'light-white': 'var(--light-white)',
          'secondary-color': 'var(--secondary-color)',
          'secondary-color-dark': 'var(--secondary-color-dark)',
          'shadow-color': 'var(--shadow-color)',
          'background-color': 'var(--background-color)',
          'text-color': 'var(--text-color)',
          'text-color-light': 'var(--text-color-light)',
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        boxShadow: {
          'card-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          'card-shadow-hover': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
        },
        borderRadius: {
          'card-radius': '1rem',
        },
      },
    },
    plugins: [],
  };
