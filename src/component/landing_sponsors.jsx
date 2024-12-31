import React from "react";
import "./landing_sponsors.css";

const sponsors = [
    {
        id: 1,
        name: "GeeksforGeeks",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg", // Replace with actual logo URLs
        link: "https://www.geeksforgeeks.org", // Replace with sponsor website link
    },
    {
        id: 2,
        name: "Sponsor 2",
        logo: "https://via.placeholder.com/150", // Replace with actual logo
        link: "#",
    },
    {
        id: 3,
        name: "Sponsor 3",
        logo: "https://via.placeholder.com/150", // Replace with actual logo
        link: "#",
    },
];

const LandingSponsors = () => {
    return (
        <>
    <div className="sponsors-container">
      {sponsors.map((sponsor) => (
        <a
          href={sponsor.link}
          key={sponsor.id}
          className="sponsor-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo" />
          <p className="sponsor-name">{sponsor.name}</p>
        </a>
      ))}
    </div>
      <div className="events-svg flex justify-end items-center pb-4 pr-36">
      <a href="/events" className="flex items-center hover:underline group">
          View More
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className=" ml-1 transform transition-transform group-hover:translate-x-2">
              <circle cx="12" cy="12" r="12" fill="#E4013E" />
              <path d="M19.4484 13.0523V10.9849L13.4137 5.05859L10.4638 5.05859L16.4435 10.9849H4.56836V13.0523H16.4837L10.504 18.9786H13.4542L19.4484 13.0523Z" fill="white" />
          </svg>
      </a>
  </div>
  </>

    );
};

export default LandingSponsors;
