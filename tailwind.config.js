const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.tsx'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    variants: {
        extend: {
            opacity: ['disabled']
        }
    },
    plugins: [require('@tailwindcss/forms')]
}
