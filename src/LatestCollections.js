import React from "react";
import { collection } from "./meta/datafile";

export default class LatestCollections extends React.Component {
  render() {
    return (
      <div>
        <div className="separator">LATEST COLLECTION</div>
        <div className="collectioncarousel">
          {collection.map((s) => {
            return (
              <div key={s.id} className="carouselslide">
                <img src={s.imgurl} alt="denimjean" />
                <p>{s.name}</p>
                <p className="price">{s.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
