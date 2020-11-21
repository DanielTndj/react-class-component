import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "Summer" : "Winter";
  } else {
    return latitude > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const text =
    season === "Winter" ? "Brrr, its chilly!" : "Lets hit the beach!";
  const icon = season === "Winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`${icon} icon`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
