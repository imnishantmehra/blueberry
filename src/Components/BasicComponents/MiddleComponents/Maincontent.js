import React, { useState } from "react";
import TabItems from "./TabItems";
import ChatMessage from "./ChatMessage";

function Maincontent() {
  const [activeTab, setActiveTab] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      const message = e.target.value;
      setInputValue(e.target.value);
      setIsLoading(true);
      setChatHistory([...chatHistory, { request: message, response: '', loading: true, tab: activeTab }]);
      setTimeout(() => {
        const response = 'Response from your data';
        setChatHistory([...chatHistory, { request: message, response: response, loading: false, tab: activeTab }]);
        setIsLoading(false);
      }, 2000);
      setInputValue('');
    }
  };
  const handleSendSubmit = () => {
    if (inputValue) {
      setIsLoading(true);
      setChatHistory([...chatHistory, { request: inputValue, response: '', loading: true, tab: activeTab }]);
      setTimeout(() => {
        const response = 'Response from your data';
        setChatHistory([...chatHistory, { request: inputValue, response: response, loading: false, tab: activeTab }]);
        setIsLoading(false);
      }, 2000);
      setInputValue('');
    }
  };
  return (
    <div className="full_screen border-right  column is-6 pr-0 pl-0">
      <TabItems activeTab={activeTab} setActiveTab={setActiveTab} />
      <ChatMessage activeTab={activeTab} chatHistory={chatHistory} />
      <div className="bottom  px-5 py-5">
        <div className="field">
          <div className="control has-icons-right">
            <input
              className="input py-3 has-text-white"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleInputSubmit}
              disabled={isLoading}
            />
            <span className="is-medium is-right sendButton" onClick={handleSendSubmit}>
              <i className="fas fa-paper-plane has-color-theme"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
