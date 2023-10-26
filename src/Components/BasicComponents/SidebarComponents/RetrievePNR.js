import React from "react";
import Store from "./Store"; 

function RetrievePNR() {
  return (
    <>
      <div className="px-5">
        <div className="is-flex is-flex-wrap-wrap is-align-items-center py-2">
          <figure class="image is-16x16 mt-1 ml-0 mr-2">
            <img src="PNR.png" />
          </figure>
          <div className="meta-info">
            <div className="author has-text-white">
             Retrieve PNR
            </div>
          </div>
        </div>
        <form>
          <div class="field">
            <div class="control">
              <input class="input is-normal custom-background custom-placeholder-color" type="text" placeholder="Input PNR"/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-normal custom-background custom-placeholder-color" type="email" placeholder="Last Name"/>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <div class="select is-normal is-fullwidth custom-selected-option">
                <select class="custom-background">
                  <option class="custom-option-color">Input Source</option>
                  <option class="custom-option-color">USA</option>
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
