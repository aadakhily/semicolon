import LeftSideBar from "../../components/Home/LeftSideBar/LeftSideBar";
import PostsSection from "../../components/Home/PostsSection/PostsSection";
import RightSideBar from "../../components/Home/RightSideBar/RightSideBar";
import "./home.scss";

function Home() {
  return (
    <div className="home-page">
      <aside className="home-page__left-side-bar">
        <LeftSideBar />
      </aside>

      <section className="home-page__posts-section">
        <PostsSection />
      </section>

      <aside className="home-page__right-side-bar">
        <RightSideBar />
      </aside>
    </div>
  );
}

export default Home;
