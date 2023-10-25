import React from "react";

function ChatMessage({ activeTab }) {
  return (
      <div
        className="content"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {activeTab === 1 && (
          <p>
            <div>
              <div className="article-meta is-flex is-flex-wrap-wrap is-align-items-center px-5 py-5">
                <figure class="image is-32x32 mb-0 ml-0 mr-4">
                  <img src="chat_avatar.png" />
                </figure>
                <div className="meta-info">
                  <div className="author has-text-white">
                    What is the penalty for a no-show on this ticket?
                  </div>
                </div>
              </div>

              <div className="response is-flex px-5 py-5">
                <figure class="image is-32x32 mb-0 ml-0 mr-4">
                  <img src="small-logo.png" />
                </figure>
                <div className="meta-info">
                  <div className="author has-text-white has-text-weight-bold mb-2">
                    Response:
                  </div>
                  <div className="info has-text-white">
                    <p>According to the fare rules, for this ticket:</p>
                    <p>
                      "Cancellations are not allowed. Tickets have no value if
                      flights are not cancelled prior to departure or for
                      no-show."
                    </p>
                    <p>
                      So in case of a no-show, the ticket will have no value and
                      the fare and taxes paid will be forfeited. No refunds or
                      future travel credits will be permitted for a no-show with
                      this ticket.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </p>
        )}

        {activeTab === 2 && <p>Content for Tab 2</p>}
        {activeTab === 3 && <p>Content for Tab 3</p>}
        {activeTab === 4 && <p>Content for Tab 4</p>}
        {activeTab === 5 && <p>Content for Tab 5</p>}
        {activeTab === 6 && <p>Content for Tab 6</p>}
        {activeTab === 7 && <p>Content for Tab 7</p>}
      </div>
  );
}

export default ChatMessage;
