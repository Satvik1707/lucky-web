import React from "react";
import Carousel from "../Carousel";
// icons
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PlaceDetails({ placeDetails }) {
  console.log(placeDetails.itinerary);

  return (
    <div className="place-details-box">
      <h3 className="mb-1 text-red">{placeDetails.name}</h3>

      <p className="text-ash mb-3">
        <FaMapMarkerAlt className="text-orange me-1" /> {placeDetails.location}
      </p>
      {placeDetails.images && <Carousel images={placeDetails.images} />}
      <br />
      <p>{placeDetails.description}</p>
      <br />
      <h2>Package Itinerary</h2>
      <ol>
        {placeDetails.itinerary &&
          placeDetails.itinerary.split(".").map((item, index) => (
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
      <div style={{display:"flex", justifyContent:"space-between"}}>
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
        <div className="satvik">Packages start from <strong>₹{placeDetails.price}</strong></div>
      </div>
      <br />
    </div>
  );
}
