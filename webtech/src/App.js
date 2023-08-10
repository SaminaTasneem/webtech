import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home"
import Products from "./Products";
import Contact from "./Contact";
import About from "./About";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart"
import Error from "./Error"
import { GloblaStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

const App=()=>{

  const theme={
    colors: {
      bg: "#fff",
      black: "#000",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return(
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GloblaStyle />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
