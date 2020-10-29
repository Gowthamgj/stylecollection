import React from "react";
import { Button, InputEle } from "./generic/generalfunctions";

export default class Desktopuserform extends React.Component {
  render() {
    return (
      <div className="tabuserarea">
        {window.innerWidth >= 950 ? (
          <div className="tabprofilefirs">
            <InputEle type="text" placeholder="First name" />
            &nbsp;
            <InputEle type="text" placeholder="Last name" />
          </div>
        ) : (
          <div>
            <InputEle type="text" placeholder="First name" />
            <br />
            <br />
            <InputEle type="text" placeholder="Last name" />
          </div>
        )}

        <br />
        <br />
        <InputEle type="text" placeholder="Phone number" />
        <br />
        <br />
        <InputEle type="email" placeholder="Email" />
        <br />
        <br />
        <InputEle type="password" placeholder="Password" />
        <br />
        <br />
        <InputEle type="password" placeholder="Confirm Passwrod" />
        <br />
        <br />
        <div className="btncontaineruser">
          <Button
            title="ADD NEW ADDRESS"
            size={window.innerWidth >= 950 ? "large" : "verysmal"}
            type="dark"
          />
        </div>
      </div>
    );
  }
}
