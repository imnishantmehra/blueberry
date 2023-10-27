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
              <div className="response is-flex px-5 py-5">
                <div className="meta-info">
                  <div className="info has-text-white">
                    <p>Okay, based on the fare rules you have provided, here are the key conditions of this ticket:</p>
                    <ol>
                      <li>This is a business class fare for travel between Area 1 (likely US/Canada) and Area 2/3 (rest of the world).</li>
                      <li>It allows one-way and round trip travel. Circle trips and open jaws are permitted.</li>
                      <li>Reservations are required at least 14 days before departure and ticketing must be completed within 3 days of reservation or at least 14 days before departure, whichever is earlier. Reservations made within 26 hours of departure require immediate ticketing.</li>
                      <li>For round trips, travel from the turnaround point must begin at least 7 days after outbound travel. For one-ways, travel must begin within 1 year of ticket issuance.</li>
                      <li>Changes are allowed. Change fee applies, if any. For changes to the first flight, the ticket must be reissued using current fares. For other flights, reissue using current fares or historical fares if itineraries qualify. Advance purchase may be waived. Travel must begin within 1 year of the original issue date. Non-refundable taxes and the original fare amount remain non-refundable.</li>
                      <li>Cancellations are not allowed. Tickets have no value if flights are not canceled prior to departure or for no-show.</li>
                      <li>Tickets are non-refundable before departure. Partially used tickets are non-refundable after departure. Fully unused tickets may be refunded within 1 year of issuance with a fee. Refunds will be made to the original form of payment.</li>
                      <li>No blackout dates apply.</li>
                      <li>Accompanying infants under 2 without a seat are charged at 10% of the fare. Accompanied children aged 2-11 are charged the full fare.</li>
                      <li>Discounts for tour conductors and agents do not apply.</li>
                      <li>Sales restrictions apply based on routing and operating carrier as specified. Tickets must be issued on/before a certain date.</li>
                      <li>The carrier may limit the number of seats available at these fares on any given flight according to their discretion.</li>
                    </ol>
                    <p>Please let me know if you need any clarification or have additional questions.</p>
                  </div>
                </div>
              </div>
              <div className="article-meta is-flex is-flex-wrap-wrap is-align-items-center px-5 py-5">
                <figure className="image is-32x32 mb-0 ml-0 mr-4">
                  <img src="chat_avatar.png" alt="" />
                </figure>
                <div className="meta-info">
                  <div className="author has-text-white">
                    What is the penalty for a no-show on this ticket?
                  </div>
                </div>
              </div>

              <div className="response is-flex px-5 py-5">
                <figure className="image is-32x32 mb-0 ml-0 mr-4">
                  <img src="small-logo.png" alt="" />
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

        {activeTab === 2 && <p>
            <div>
              <div className="response is-flex px-5 py-5">
                <div className="meta-info">
                  <div className="info has-text-white">
                    <p>Okay, based on the fare rules you have provided, here are the key conditions of this ticket:</p>
                    <ol>
                      <li>This is a business class fare for travel between Area 1 (likely US/Canada) and Area 2/3 (rest of the world).</li>
                      <li>It allows one-way and round trip travel. Circle trips and open jaws are permitted.</li>
                      <li>Reservations are required at least 14 days before departure and ticketing must be completed within 3 days of reservation or at least 14 days before departure, whichever is earlier. Reservations made within 26 hours of departure require immediate ticketing.</li>
                      <li>For round trips, travel from the turnaround point must begin at least 7 days after outbound travel. For one-ways, travel must begin within 1 year of ticket issuance.</li>
                      <li>Changes are allowed. Change fee applies, if any. For changes to the first flight, the ticket must be reissued using current fares. For other flights, reissue using current fares or historical fares if itineraries qualify. Advance purchase may be waived. Travel must begin within 1 year of the original issue date. Non-refundable taxes and the original fare amount remain non-refundable.</li>
                      <li>Cancellations are not allowed. Tickets have no value if flights are not canceled prior to departure or for no-show.</li>
                      <li>Tickets are non-refundable before departure. Partially used tickets are non-refundable after departure. Fully unused tickets may be refunded within 1 year of issuance with a fee. Refunds will be made to the original form of payment.</li>
                      <li>No blackout dates apply.</li>
                      <li>Accompanying infants under 2 without a seat are charged at 10% of the fare. Accompanied children aged 2-11 are charged the full fare.</li>
                      <li>Discounts for tour conductors and agents do not apply.</li>
                      <li>Sales restrictions apply based on routing and operating carrier as specified. Tickets must be issued on/before a certain date.</li>
                      <li>The carrier may limit the number of seats available at these fares on any given flight according to their discretion.</li>
                    </ol>
                    <p>Please let me know if you need any clarification or have additional questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </p>}
        {activeTab === 3 && <p>
            <div>
              <div className="response is-flex px-5 py-5">
                <div className="meta-info">
                  <div className="info has-text-white">
                    <p>Okay, based on the fare rules you have provided, here are the key conditions of this ticket:</p>
                    <ol>
                      <li>This is a business class fare for travel between Area 1 (likely US/Canada) and Area 2/3 (rest of the world).</li>
                      <li>It allows one-way and round trip travel. Circle trips and open jaws are permitted.</li>
                      <li>Reservations are required at least 14 days before departure and ticketing must be completed within 3 days of reservation or at least 14 days before departure, whichever is earlier. Reservations made within 26 hours of departure require immediate ticketing.</li>
                    </ol>
                    <p>Please let me know if you need any clarification or have additional questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </p>}
        {activeTab === 4 && <p>
            <div>
              <div className="response is-flex px-5 py-5">
                <div className="meta-info">
                  <div className="info has-text-white">
                    <p>Okay, based on the fare rules you have provided, here are the key conditions of this ticket:</p>
                    <ol>
                      <li>Tickets are non-refundable before departure. Partially used tickets are non-refundable after departure. Fully unused tickets may be refunded within 1 year of issuance with a fee. Refunds will be made to the original form of payment.</li>
                      <li>No blackout dates apply.</li>
                      <li>Accompanying infants under 2 without a seat are charged at 10% of the fare. Accompanied children aged 2-11 are charged the full fare.</li>
                      <li>Discounts for tour conductors and agents do not apply.</li>
                      <li>Sales restrictions apply based on routing and operating carrier as specified. Tickets must be issued on/before a certain date.</li>
                      <li>The carrier may limit the number of seats available at these fares on any given flight according to their discretion.</li>
                    </ol>
                    <p>Please let me know if you need any clarification or have additional questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </p>}
        {activeTab === 5 && <p>
            <div>
              <div className="response is-flex px-5 py-5">
                <div className="meta-info">
                  <div className="info has-text-white">
                    <p>Okay, based on the fare rules you have provided, here are the key conditions of this ticket:</p>
                    <ol>
                      <li>Discounts for tour conductors and agents do not apply.</li>
                      <li>Sales restrictions apply based on routing and operating carrier as specified. Tickets must be issued on/before a certain date.</li>
                      <li>The carrier may limit the number of seats available at these fares on any given flight according to their discretion.</li>
                    </ol>
                    <p>Please let me know if you need any clarification or have additional questions.</p>
                  </div>
                </div>
              </div>
            </div>
          </p>}
        {activeTab === 6 && <p>Content for Tab 6</p>}
        {activeTab === 7 && <p>Content for Tab 7</p>}
      </div>
  );
}

export default ChatMessage;
