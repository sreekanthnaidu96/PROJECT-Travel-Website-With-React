import React from "react";
import "./FullDetails.css";
import { Link } from "react-router-dom";

function SingleItem(props) {
  return (
    <>
      <li className="item">
        <Link className="item-link" to={props.path}>
          <figure className="item-image" data-category={props.label}>
            <img src={props.src} alt={props.name} className="item-img" />
          </figure>
          <div className="item-info">
            <h4 className="item-text">{props.text}</h4>
          </div>
        </Link>
      </li>
    </>
  );
}

export default SingleItem;
