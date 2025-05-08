"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typography = _interopRequireDefault(require("@tailwindcss/typography"));

var _tailwindcssTextshadow = _interopRequireDefault(require("tailwindcss-textshadow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @type {import('tailwindcss').Config} */
var _default = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64FA"
      },
      fontFamily: {
        poppins: "poppins, sans-serif"
      },
      keyframes: {
        wiggle: {
          "0% , 100%": {
            transform: "rotate(-3deg)"
          },
          "50%": {
            transform: "rotate(3deg)"
          }
        }
      },
      animation: {
        wiggle: "wiggle 20s ease-in-out infinite"
      }
    }
  },
  plugins: [_typography["default"], _tailwindcssTextshadow["default"]]
};
exports["default"] = _default;