import React, { Component } from "react";

// Styles
import "./index.css";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <div
          className="container-avatar"
          style={{ backgroundImage: `url(${profile.avatar_url})` }}
        />
        <div className="container-content">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
