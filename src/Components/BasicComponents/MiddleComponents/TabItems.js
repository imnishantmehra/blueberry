import React, { useState, useEffect } from "react";
import '../../StyleComponents/MainContent.scss'
import tabsData from '../../../json/tabs.json';
import { Link } from "react-router-dom";

function TabItems({ activeTab, setActiveTab }) {
  const [tabNames, setTabNames] = useState([]);
  useEffect(() => {
    setTabNames(tabsData);
  }, []);
  return (
    <div className="head-bar is-flex is-justify-content-space-around is-align-items-center px-4 pt-0 pb-0 mb-5">
      <div className="tabs is-medium">
        <ul>
          {tabNames.map(tab => (
            <li key={tab.id} className={activeTab === tab.id ? "is-active" : ""}>
              <Link onClick={() => setActiveTab(tab.id)}>{tab.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TabItems;
