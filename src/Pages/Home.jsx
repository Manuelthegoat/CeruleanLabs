import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Welcome from "../Components/Welcome/Welcome";
import Search from "../Components/Search/Search";
import TheWhy from "../Components/TheWhy/TheWhy";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <Search />
      <TheWhy />
    </>
  );
};

export default Home;
