import "./styles/userarena.css";
import React from "react";
import { orderDetails } from "./meta/datafile";

export default class OrdersMobile extends React.Component {
  render() {
    return (
      <div>
        <h6 className="ordertitle">Pending Orders</h6>
        {orderDetails.map((o) => {
          return (
            <div className="ordercontainer" key={o.id}>
              <img className="orderimg" src={o.imgurl} alt="ordrimg" />
              <span className="producticon">&gt;</span>
              <div className="orderdesccontainer">
                <p className="orderid">Order #{o.orderid}</p>
                <p className="orderprice">
                  cash on delivery &#8377;<b>{o.price}</b>
                </p>
                <br />
                <br />
                <p className="orderdesc">{o.desc}</p>
                <h3 className="deliverytime">
                  {"Express Delivery by" + o.delivery}
                </h3>
              </div>
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
