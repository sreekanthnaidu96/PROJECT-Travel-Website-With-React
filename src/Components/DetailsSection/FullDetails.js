import React from "react";
import "./FullDetails.css";
import SingleItem from "./SingleItem";

function FullDetails() {
  return (
    <div className="fullDetails">
      <h1>Check Out These Awesome Destinations</h1>
      <div className="details-container">
        <div className="details-wrapper">
          <ul className="Data">
            <SingleItem
              name="amazon"
              src="images/amazon.jpg"
              text="Explore the Uncharted places deep inside the Amazon Jungle"
              label="Explore"
              path="/services"
            />
            <SingleItem
              name="Levanto, Italy"
              src="images/Levanto, Italy.jpg"
              text="Stay at the Luxury Hotels in Levanto, Italy"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="Data">
            <SingleItem
              name="Khumjung, Nepal"
              src="images/Khumjung, Nepal.jpg"
              text="Drink Hot Tea At The Foot Of Everest in Khumjung, Nepal"
              label="Accommodation"
              path="/tours"
            />
            <SingleItem
              name="Lenvik, Norway"
              src="images/Lenvik, Norway.jpg"
              text="Experience The Northern Lights of Lenvik, Norway"
              label="Adventure"
              path="/services"
            />
            <SingleItem
              name="pamukkale turkey"
              src="images/pamukkale turkey.jpg"
              text="Take A Dip In The Holy Waters Of Pamukkale, Turkey"
              label="Adventure"
              path="/tours"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FullDetails;
