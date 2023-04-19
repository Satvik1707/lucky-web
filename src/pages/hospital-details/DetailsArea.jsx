import React from "react";
import Carousel from "../Carousel";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function HospitalDetails({ hospitalDetails }) {
  return (
    <div className="place-details-box">
      <h3 className="mb-1 text-red">{hospitalDetails.name}</h3>
      <p className="text-ash mb-3">
        <FaMapMarkerAlt className="text-orange me-1" />{" "}
        {hospitalDetails.location}
      </p>
      {hospitalDetails.images && <Carousel images={hospitalDetails.images} />}
      <br />
      <p>{hospitalDetails.description}</p>
      <br />
      <h2>Package Itinerary</h2>
      <ol>
        {hospitalDetails.itinerary &&
          hospitalDetails.itinerary.split(".").map((item, index) => (
            <div
              style={{
                borderLeft: "3px black solid",
                marginBottom: "10px",
                paddingLeft: "10px",
              }}
              key={index}
            >
              {item}
            </div>
          ))}
      </ol>
      <br />
      <div>
      <a
        href="mailto:xyz@yourapplicationdomain.com"
        style={{
          padding: "8px 12px",
          background: "#444444",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Send Enquiry
      </a>
      <div className="satvik">Packages start from <strong>₹{hospitalDetails.price}</strong></div>
      </div>
      <br />
    </div>
  );
}
