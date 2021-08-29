import React, { useEffect } from "react";

function Services() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <h1 className="services">SERVICES</h1>;
}

export default Services;
