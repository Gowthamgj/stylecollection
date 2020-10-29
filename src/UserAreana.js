import React, { Suspense } from "react";
import Accordian from "./generic/Accordian";
import Accordianpanel from "./generic/Accordianpanel";
import { Loader } from "./generic/Loader";
import { TabPane } from "./generic/generalfunctions";
import Tabs from "./generic/Tabs";
import grish from "./images/grish.png";
import { orderDetails, tabMap } from "./meta/datafile";
import "./styles/userarena.css";
const OrdersMobile = React.lazy(() => import("./OrdersMobile"));
const OrdersDesktop = React.lazy(() => import("./OrdersDesktop"));
const Mobileuserform = React.lazy(() => import("./Mobileuserform"));
const Desktopuserform = React.lazy(() => import("./Desktopuserform"));

export default class UserAreana extends React.Component {
  constructor(props) {
    super(props);
    this.orderDetails = orderDetails;
    this.state = {
      isMobileDevice: this.props.isMobileDevice,
      selectedTab: "1",
      isTabletDevice: this.props.isTabletDevice
    };
    this.tabMap = tabMap;
    this.mobileVerticalView = this.mobileVerticalView.bind(this);
    this.desktopHorizontalView = this.desktopHorizontalView.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      isMobileDevice: nextProps.isMobileDevice,
      isTabletDevice: nextProps.isTabletDevice,
      selectedTab: nextProps.selectedTab
    };
  }
  mobileVerticalView() {
    return (
      <Accordian id="userdet" preselect={this.tabMap[this.state.selectedTab]}>
        <Accordianpanel
          id="profile"
          parentid="userdet"
          title="My Profile"
          subtitle="Notifications, password"
        >
          <Suspense fallback={<Loader />}>
            <Mobileuserform />
          </Suspense>
        </Accordianpanel>
        <Accordianpanel
          id="wishlist"
          parentid="userdet"
          title="My Orders"
          subtitle="Already have 12 orders"
        >
          <Suspense fallback={<Loader />}>
            <OrdersMobile />
          </Suspense>
        </Accordianpanel>
        <Accordianpanel
          id="address"
          parentid="userdet"
          title="Shipping address"
          subtitle="3 address"
        >
          <h2>Address details will be shown here</h2>
        </Accordianpanel>
      </Accordian>
    );
  }
  desktopHorizontalView() {
    return (
      <Tabs
        align="left"
        preselect={this.state.selectedTab}
        selectedTabChange={(e) => {
          // this.setState({ selectedTab: e + "" });
          this.props.updateselectedTab(e + "");
        }}
      >
        <TabPane
          id="1"
          title="My Profile"
          subtitle="notifications, password"
          selected={this.state.selectedTab}
        >
          <h3 className="userheading">My Profile</h3>
          <br />
          <br />
          <br />
          <Suspense fallback={<Loader />}>
            <Desktopuserform />
          </Suspense>
        </TabPane>
        <TabPane
          id="2"
          title="My Orders"
          subtitle="Already have 12 orders"
          selected={this.state.selectedTab}
        >
          <Suspense fallback={<Loader />}>
            <h3 className="ordertitledesk">My Orders</h3>
            <OrdersDesktop />
          </Suspense>
        </TabPane>
        <TabPane
          id="3"
          title="Shipping Address"
          subtitle="3 address"
          selected={this.state.selectedTab}
        >
          <h1>Shipping address will flow here</h1>
        </TabPane>
      </Tabs>
    );
  }
  render() {
    return (
      <div className="userarena">
        {!this.state.isMobileDevice && !this.state.isTabletDevice ? (
          <div className="breadcrump">{this.props.breadCrump}</div>
        ) : (
          ""
        )}
        <div
          className={`userdetailcontainer ${
            !this.state.isMobileDevice ? "desktopuserdetail" : ""
          }`}
        >
          <img className="userimage" src={grish} alt="usr" />
          <p className="username">Grishk</p>
          <br />
          <br />
          <p className="useremail">grishk@gmail.com</p>
        </div>
        <div></div>
        {this.state.isMobileDevice ? (
          <this.mobileVerticalView />
        ) : (
          <this.desktopHorizontalView />
        )}
      </div>
    );
  }
}
