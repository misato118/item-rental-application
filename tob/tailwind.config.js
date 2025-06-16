//import daisyui from "daisyui";
const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        'bg-APPLIED', 'bg-DECLINED', 'bg-ACCEPTED', 'bg-DELIVERED',
        'bg-RENTED', 'bg-RETURNED', 'bg-COMPLETED', 'bg-UNAVAILABLE',
        'text-APPLIED', 'text-DECLINED', 'text-ACCEPTED', 'text-DELIVERED',
        'text-RENTED', 'text-RETURNED', 'text-COMPLETED', 'text-UNAVAILABLE'
    ],
    theme: {
        extend: {
            colors: {
                APPLIED: "#facc15",
                DECLINED: "#ef4444",
                ACCEPTED: "#6e00ff",
                DELIVERED: "#3b82f6",
                RENTED: "#a855f7",
                RETURNED: "#10b981",
                COMPLETED: "#737373",
                UNAVAILABLE: "#ffffff"             
            }
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['cmyk'],
    }
};