import PodcastSection from "./PodcastsSection/PodcastSection";
import PublishersSection from "./PublishersSection/PublishersSection";
import "./rightSideBar.scss";

function RightSideBar() {
  return (
    <div className="app-right-side-bar">
      <PodcastSection />
      <PublishersSection />
    </div>
  );
}

export default RightSideBar;
