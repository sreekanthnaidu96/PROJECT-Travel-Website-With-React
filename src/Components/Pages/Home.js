import React, { useEffect } from "react";
import MainSection from "../MainSection/MainSection";
import FullDetails from "../DetailsSection/FullDetails";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <MainSection />
      <FullDetails />
    </>
  );
}

export default Home;
