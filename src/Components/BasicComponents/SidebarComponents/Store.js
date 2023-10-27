import React from "react";

function Store() {
  return (
    <>
      <div className="bottom-border px-5 mt-5">
        <div className="is-flex is-flex-wrap-wrap is-align-items-center py-2">
          <figure className="image is-16x16 mt-1 ml-0 mr-2">
            <img src="store.png" alt="" />
          </figure>
          <div>
            <div className="author has-text-white">
             Store Prompts
            </div>
          </div>
          <figure className="image is-16x16 mb-0 ml-auto">
            <img src="plus.png" alt="" />
          </figure>
        </div>
        <h5>
          <span className="has-text-grey">Here you can save your most frequently used propmts to be re-used anytime.</span>
        </h5>
        <div className="bottom-border mt-3">
          <h4 className="has-text-white mt-3">Processes</h4>
          <div className="is-flex is-flex-wrap-wrap is-align-items-center py-2">
            <figure className="image is-16x16 mt-1 ml-0 mr-2">
              <img src="white-store.png" alt="" />
            </figure>
            <div className="meta-info">
              <div className="author has-text-white">
                Client.com - process travel authorization
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-border mt-3">
          <h4 className="has-text-white mt-3">GDS</h4>
          <div className="is-flex is-flex-wrap-wrap is-align-items-center py-2">
            <figure className="image is-16x16 mt-1 ml-0 mr-2">
              <img src="white-store.png" alt="" />
            </figure>
            <div className="meta-info">
              <div className="author has-text-white">
                Exchange in Amadues
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
