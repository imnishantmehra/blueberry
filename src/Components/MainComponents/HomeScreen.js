import React from "react";
import Header from "../BasicComponents/Header";
import LeftSidebar from "../BasicComponents/SidebarComponents/LeftSidebar";
import Maincontent from "../BasicComponents/MiddleComponents/Maincontent";
import RightSidebar from "../BasicComponents/SidebarComponents/RightSidebar";

function HomeScreen() {
  return (
    <div>
      <Header />
      <div className="layout mx-3">
        <div className="columns mt-0">
          <LeftSidebar />
          <Maincontent />
          <RightSidebar/>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
