import React from "react";
import Response from "./Response";
import tabsData from '../../../json/tabs.json';
import Avatar from "./Avatar";

function ChatMessage({ activeTab, chatHistory }) {
  const selectedTab = tabsData.find((tab) => tab.id === activeTab)
  chatHistory[0] = { request: selectedTab.request, response: selectedTab.content, tab: activeTab }
  return (
      <div
        className="style-3 content"
        style={{ height: "calc(100vh - 245px)", overflowY: "auto" }}
      >
        {selectedTab && (
          <p>
            <div>
            {chatHistory.filter(message => selectedTab.id === message.tab).map((message, index) => (
              <div key={index} className="chat-message">
                <div className="article-meta is-flex is-flex-wrap-wrap is-align-items-center px-5 py-5">
                  <figure className="image is-32x32 mb-0 ml-0 mr-4">
                    <Avatar isUser={false} />
                  </figure>
                  <div className="meta-info">
                    <div className={`author has-text-white ${message.isUser ? 'user-name' : 'response-name'}`}>
                      {message.request}
                    </div>
                  </div>
                </div>
                <Response content={message.response} isLoading={message.loading}/>
              </div>
            ))}
            </div>
          </p>
        )}
      </div>
  );
}

export default ChatMessage;
