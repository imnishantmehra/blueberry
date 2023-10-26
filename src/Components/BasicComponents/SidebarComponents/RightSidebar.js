import React from 'react'
import RetrievePNR from "./RetrievePNR"; 
import '../../StyleComponents/RightSidebar.scss'

function RightSidebar() {
  return (
    <aside className="full_screen sideNav border-right column is-3 pr-0 pl-0">
      <div className="head-bar is-flex is-justify-content-space-around is-align-items-center px-4 pt-1 pb-4 mb-5">
        <h2 className="title is-4 mb-0 has-text-white-ter">
          Settings
        </h2>
        <div className="end image is-16x16 ml-auto">
          <img src="cross.png" alt="" />
        </div>
      </div>
      <RetrievePNR />
    </aside>
  )
}

export default RightSidebar