import React from "react";

const Spinner = ({ text }) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{text}</div>
    </div>
  );
};

Spinner.defaultProps = {
  text: "Loading...",
};

export default Spinner;
