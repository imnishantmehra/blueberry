import React,{useState} from 'react'

function Maincontent() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };


  return (
   
    <div className="full_screen border-right  column is-6 pr-0 pl-0">

    <div className="head-bar is-flex is-justify-content-space-around is-align-items-center px-4 pt-0 pb-0 mb-5">
    <div className="tabs is-medium">
    <ul>
      <li className={activeTab === 1 ? 'is-active' : ''}><a onClick={() => handleTabClick(1)}>Free Flow</a></li>
      <li className={activeTab === 2 ? 'is-active' : ''}><a onClick={() => handleTabClick(2)}>Fare rules</a></li>
      <li className={activeTab === 3 ? 'is-active' : ''}><a onClick={() => handleTabClick(3)}>Tech Support</a></li>
      <li className={activeTab === 4 ? 'is-active' : ''}><a onClick={() => handleTabClick(4)}>Travel Policy</a></li>
      <li className={activeTab === 5 ? 'is-active' : ''}><a onClick={() => handleTabClick(5)}>GDS manuals</a></li>
      <li className={activeTab === 6 ? 'is-active' : ''}><a onClick={() => handleTabClick(6)}>Supplier Info</a></li>
      <li className={activeTab === 7 ? 'is-active' : ''}><a onClick={() => handleTabClick(7)}>Upset calls</a></li>
    </ul>
  </div>

 </div>



 <div className="content" style={{ maxHeight: '400px', overflowY: 'auto' }}>
 {activeTab === 1 && <p>
  <div>
  <div className="article-meta is-flex is-flex-wrap-wrap is-align-items-center px-5 py-5">
  <figure class="image is-32x32 mb-0 ml-0 mr-4">
  <img src="chat_avatar.png"/></figure>
  <div className="meta-info">
  <div className="author has-text-white">What is the penalty for a no-show on this ticket?</div>
  
</div>                          
 </div>

 <div className="response is-flex px-5 py-5">
  <figure class="image is-32x32 mb-0 ml-0 mr-4">
  <img src="small-logo.png"/></figure>
  <div className="meta-info">
  <div className="author has-text-white has-text-weight-bold mb-2">Response:</div>
  <div className="info has-text-white">
  <p>According to the fare rules, for this ticket:</p>
  <p>"Cancellations are not allowed. Tickets have no value if flights are not cancelled prior
   to departure or for no-show."</p>
   <p>So in case of a no-show, the ticket will have no value and the fare and taxes paid will
   be forfeited. No refunds or future travel credits will be permitted for a no-show with this ticket.</p>
  
  
  </div>

  
</div>                          
 </div>
  
  
  
  
  
  </div></p>}



 
 {activeTab === 2 && <p>Content for Tab 2</p>}
 {activeTab === 3 && <p>Content for Tab 3</p>}
 {activeTab === 4 && <p>Content for Tab 4</p>}
 {activeTab === 5 && <p>Content for Tab 5</p>}
 {activeTab === 6 && <p>Content for Tab 6</p>}
 {activeTab === 7 && <p>Content for Tab 7</p>}
 
</div>

<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input"/>
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma"/>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox"/>
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question"/>
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question"/>
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>

  
  </div>
    
  )
}

export default Maincontent