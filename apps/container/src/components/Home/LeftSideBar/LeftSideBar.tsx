import React from "react";

import "./leftSideBar.scss";
import { Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <div className="left-side-bar">
      <div className="left-side-bar__links">
        <Link to={"/"} className="left-side-bar__link">
          Home
        </Link>
        <Link to={"/podcasts"} className="left-side-bar__link">
          Podcasts
        </Link>
        <Link to={"/posts"} className="left-side-bar__link">
          Posts
        </Link>
        <Link to={"/users"} className="left-side-bar__link">
          Publishers
        </Link>
      </div>

      <div className="left-side-bar__tags">
        <h5 className="left-side-bar__tags-title">Tags</h5>
        <Link to={"#"} className="left-side-bar__link">
          # JavaScript
        </Link>
        <Link to={"#"} className="left-side-bar__link">
          # TypeScript
        </Link>
        <Link to={"#"} className="left-side-bar__link">
          # Css
        </Link>
        <Link to={"#"} className="left-side-bar__link">
          # Html
        </Link>
        <Link to={"#"} className="left-side-bar__link">
          # Git
        </Link>
        <Link to={"#"} className="left-side-bar__link">
          # React
        </Link>
      </div>
    </div>
  );
}

export default LeftSideBar;
