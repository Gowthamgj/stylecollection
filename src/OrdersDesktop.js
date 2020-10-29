import React from "react";
import { orderDetails } from "./meta/datafile";

export default class OrderDesktop extends React.Component {
  render() {
    return (
      <div>
        {orderDetails.map((o) => {
          return (
            <div className="ordercontainerdesk" key={o.id}>
              <img className="orderimg" src={o.imgurl} alt="ordrimg" />
              <span className="orderprice">
                Credit Card Payment <br />
                <strong style={{ color: "black" }}>Rs {o.price}</strong>
              </span>
              <div className="orderdesccontainer">
                <span className="orderid">Order #{o.orderid}</span>
                <br />
                <p className="orderdesc">{o.desc}</p>
                <br />
                <br />
                <p className="deliverytime">
                  {"Express Delivery by" + o.delivery}
                </p>
              </div>
              <span className="producticon">&gt;</span>
              <br />
              <button
                className={`pendingbuton ${
                  o.pending ? "darkcolor" : "disabled"
                }`}
              >
                Pending
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
