import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
 fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    abel: {
      gold: "#D4AF37",
      goldDark: "#C5A028",
      paper: "#F9F7F2",
      dark: "#111827",
    },
  },
});

export default theme;
