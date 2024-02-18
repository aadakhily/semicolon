import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header/Header";

import "./mainLayout.scss";

function Main() {
  return (
    <div className="main-layout">
      <Header />

      <main className="main-layout__page">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
