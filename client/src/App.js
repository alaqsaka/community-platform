import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
} from "@material-ui/core";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const theme = createTheme({
    palette: {
      type: "dark",
      background: {
        default: "#1E1F21",
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Navbar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" exact element={<Navigate to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              exact
              element={!user ? <Auth /> : <Navigate to="/posts" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
