import React from "react";

function TabItems({ activeTab, setActiveTab }) {
  return (
    <div className="head-bar is-flex is-justify-content-space-around is-align-items-center px-4 pt-0 pb-0 mb-5">
      <div className="tabs is-medium">
        <ul>
          <li className={activeTab === 1 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(1)} href="">Free Flow</a>
          </li>
          <li className={activeTab === 2 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(2)} href="">Fare rules</a>
          </li>
          <li className={activeTab === 3 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(3)} href="">Tech Support</a>
          </li>
          <li className={activeTab === 4 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(4)} href="">Travel Policy</a>
          </li>
          <li className={activeTab === 5 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(5)} href="">GDS manuals</a>
          </li>
          <li className={activeTab === 6 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(6)} href="">Supplier Info</a>
          </li>
          <li className={activeTab === 7 ? "is-active" : ""}>
            <a onClick={() => setActiveTab(7)} href="">Upset calls</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TabItems;
