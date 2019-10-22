import React, { Component } from "react";

//Components
import Card from "../Card";

// Styles
import "./index.css";

const CardList = props => (
  <div className="container-cardlist">
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

export default CardList;
