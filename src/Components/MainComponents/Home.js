import React from 'react'
import Header from '../BasicComponents/Header'
import Sidebar from '../BasicComponents/Sidebar'
import Maincontent from '../BasicComponents/Maincontent'

function Home() {
  return (
    <div>
       <Header/>
       <div className="layout mx-3">
       <div className="columns mt-0">
       <Sidebar/>
        <Maincontent/>
         
       </div>
     </div>
      
       
    </div>
  )
}

export default Home