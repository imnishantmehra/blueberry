import React from "react";
import ArticleCard from "./ArticleCard"; 
import '../../StyleComponents/LeftSidebar.scss'

function LeftSidebar() {
  return (
    <aside className="full_screen sideNav border-right column is-3 pr-0 pl-0">
      <div className="head-bar is-flex is-justify-content-space-around is-align-items-center px-4 pt-1 pb-4 mb-5">
        <h2 className="title is-4 mb-0 has-text-white-ter">
          Conversation History
        </h2>
        <div className="end image is-16x16 ml-auto">
          <img src="filter.png" alt="" />
        </div>
      </div>

      {/* Render dynamic article cards using the ArticleCard component */}
      <ArticleCard
        title="I have an error AIRLINE SYSTEM UNAB..."
        date="Monday, Jan 12, 2023"
        msgCate="gds manuals"
        color="is-warning"
      />

      <ArticleCard
        title="Another article title"
        date="Tuesday, Feb 22, 2023"
        msgCate="travel policy"
        color="is-primary"
      />

      {/* Add more ArticleCard components as needed for your articles */}

      <ArticleCard
        title="Yet another article title"
        date="Wednesday, Mar 15, 2023"
        msgCate="it support"
        color="is-success"
      />

      <article className="media mb-4 px-4">
        <div className="inner-content px-6 py-4">
          <h2 className="subtitle is-6 mb-1 has-text-grey">+ start a new conversation</h2>
        </div>
      </article>
    </aside>
  );
}

export default LeftSidebar;
