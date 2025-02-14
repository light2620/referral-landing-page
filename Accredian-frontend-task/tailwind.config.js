// tailwind.config.js
export const theme = {
    extend: {
        fontSize: {
            base: '1rem', // 16px
            sm: '0.875rem', // 14px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
        },
    },
};
export const corePlugins = {
    preflight: true, // Ensure Tailwind resets are applied
};