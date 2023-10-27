import React from "react";
import Store from "./Store"; 

function RetrievePNR() {
  return (
    <>
      <div className="px-5">
        <div className="is-flex is-flex-wrap-wrap is-align-items-center py-2">
          <figure className="image is-16x16 mt-1 ml-0 mr-2">
            <img src="PNR.png" alt="" />
          </figure>
          <div className="meta-info">
            <div className="author has-text-white">
             Retrieve PNR
            </div>
          </div>
        </div>
        <form>
          <div className="field">
            <div className="control">
              <input className="input is-normal custom-background custom-placeholder-color" type="text" placeholder="Input PNR"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-normal custom-background custom-placeholder-color" type="email" placeholder="Last Name"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <div className="select is-normal is-fullwidth custom-selected-option">
                <select className="custom-background">
                  <option className="custom-option-color">Input Source</option>
                  <option className="custom-option-color">USA</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Store />
    </>
  );
}

export default RetrievePNR;
