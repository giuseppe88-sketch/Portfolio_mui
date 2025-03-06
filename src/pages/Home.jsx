import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Introduction from "./Introduction";
import MyWork from "./MyWork";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import "../App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
});

export default function Home() {

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div className="section">
            <Introduction />
          </div>
          <div className="section">
            <MyWork />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Skills />
          </div>
          <div className="section">
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
