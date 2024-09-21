export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          "0%, 100%": {
            transform: "translate(0)",
            "box-shadow": "0px 6px 8px rgba(0, 0, 0, 0.2)", // Starting at the original position
          },
          "50%": {
            transform: "translateY(-20px)",
            "box-shadow": "0px 3px 2px rgba(0, 0, 0, 0.1)", // Move up by 10px
          },
        },
      },
      animation: {
        customBounce: "customBounce 3s ease 0s infinite", // Define the animation duration and loop
      },
    },
  },
  plugins: [],
};
