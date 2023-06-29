import "./App.css";
import SideBarExpanded from "./components/LeftSidebar/SideBarExpanded/SideBarExpanded";
import SideBarMenu from "./components/LeftSidebar/SideBarMenu/SideBarMenu";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import RightSideBar from "./components/RightSidebar/RightSideBar";
import ShareExperience from "./components/ShareExperience/ShareExperience";
import Stories from "./components/Stories/Stories";
import { PostsDetails } from "./constants/Details";

function App() {
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="sidebar-left">
          {/*  Content for the left sidebar */}
          <SideBarMenu />
          <SideBarExpanded />
        </div>

        <div class="content">
          {/* -------------Stories----------- */}
          <Stories />

          {/* ----------Share Your Experience------- */}
          <ShareExperience />

          <h3 className="recent_heading">Recent posts</h3>
          {PostsDetails?.map((item) => (
            <Posts details={item} />
          ))}
        </div>

        <div class="sidebar-right">
          {/* Content for the right sidebar */}
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
