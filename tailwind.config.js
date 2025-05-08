/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import textshadow from "tailwindcss-textshadow";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#64FA",
            },
            fontFamily: {
                poppins: "poppins, sans-serif",
            },
            keyframes: {
                wiggle: {
                    "0% , 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 20s ease-in-out infinite",
            },
        },
    },

    plugins: [typography, textshadow],
};
