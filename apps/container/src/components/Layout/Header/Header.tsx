import { Link } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <header className="app-header container">
      <Link to="/" className="app-header__brand">
        SemiColon;
      </Link>

      <input
        placeholder="Search ..."
        type="text"
        className="app-header__search"
      />
      <div className="app-header__actions">
        <Link to="/posts/create-post" className="app-header__create-post">
          Create Post
        </Link>

        <div className="app-header__avatar">
          <img
            src="https://i.pravatar.cc/40"
            className="app-header__avatar-image"
            alt="user Avatar Image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
