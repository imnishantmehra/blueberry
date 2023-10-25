import React, { useState } from "react";
import TabItems from "./TabItems";
import ChatMessage from "./ChatMessage";

function Maincontent() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="full_screen border-right  column is-6 pr-0 pl-0">
      <TabItems activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChatMessage activeTab={activeTab} />
      <div className="bottom  px-5 py-5">
        <div className="field">
          <div className="control has-icons-right">
            <input className="input py-3" type="text" placeholder="" value="" />
            <span className="icon is-medium is-right">
              <i className="fas fa-paper-plane has-color-theme"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
