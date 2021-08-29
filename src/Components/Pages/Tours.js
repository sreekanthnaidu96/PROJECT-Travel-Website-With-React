import React, { useEffect } from "react";

function Tours() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <h1 className="tours">TOURS</h1>;
}

export default Tours;
