export const theme = {
  colors: {
    brand: "#0F52BA",
    background: {
      primary: "#F9F9F9",
      secondary: "#EEEEEE",
    },
    text: {
      primary: "#2C2C2C",
      secondary: "white",
      tertiary: "black",
    },
    shape: {
      primary: "white",
      secondary: "#373737",
      tertiary: "black",
    },
    border: "#BFBFBF",
  },
  fonts: {
    primary: "Montserrat, sans-serif",
  },
  breakpoints: {
    xs: "(min-width: 425px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
} as const;
