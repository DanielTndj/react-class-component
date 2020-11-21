import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Brrr, it's chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-top ${iconName} icon massive`}></i>
      <h1>{text}</h1>
      <i className={`icon-bottom ${iconName} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
