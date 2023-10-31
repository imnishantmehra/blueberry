import React from "react";
import Avatar from "./Avatar";

function Response({ content, isLoading }) {
  return (
      <>
        <div className="response is-flex px-5 py-5">
          <figure className="image is-32x32 mb-0 ml-0 mr-4">
            <Avatar isUser={true} />
          </figure>
          <div className="meta-info">
            <div className="author has-text-white has-text-weight-bold mb-2">
              Response:
            </div>
            {isLoading ? (
              <div className="info has-text-white">
                <p>response is loading...</p>
              </div>
              ): (
                <div className="info has-text-white">
                  <p>{content}</p>
                </div>
              )}
          </div>
        </div>
      </>
  );
}

export default Response;
