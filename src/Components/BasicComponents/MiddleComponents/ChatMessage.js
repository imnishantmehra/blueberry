import React from "react";
import Response from "./Response";
import tabsData from '../../../json/tabs.json';
import Avatar from "./Avatar";

function ChatMessage({ activeTab }) {
  const selectedTab = tabsData.find((tab) => tab.id === activeTab)
  return (
      <div
        className="content"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {selectedTab && (
          <p>
            <div>
              <div className="article-meta is-flex is-flex-wrap-wrap is-align-items-center px-5 py-5">
                <figure className="image is-32x32 mb-0 ml-0 mr-4">
                  <Avatar isUser={false} />
                </figure>
                <div className="meta-info">
                  <div className="author has-text-white">
                    {selectedTab.request}
                  </div>
                </div>
              </div>
              <Response content={selectedTab.content}/>
            </div>
          </p>
        )}
      </div>
  );
}

export default ChatMessage;
