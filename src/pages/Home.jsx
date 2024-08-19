import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Introduction from "./Introduction";
import MyWork from "./MyWork";
import About from "./About";
import Contact from "./Contact";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Introduction />
        <MyWork />
        <About />
        <Contact />
      </ThemeProvider>
    </>
  );
}
