import React, { Component } from "react";
import "../scss/style.scss";
import dashboarddashlogo from "../img/dashboarddashlogo.png";
import savannabankLogo from "../img/savannabankLogo.png";

export default class BankDashboard extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className=" container--px">
            <a href className="header__logo">
              <img src={savannabankLogo} alt="" />
            </a>
          </nav>
        </header>
        <main className="main ">
          <aside className="menu">
            <div className="main__dashlogo">
              <img src={dashboarddashlogo} alt="" />
              <span>Dashboard</span>
            </div>
          </aside>
          <div className="main__account">
            <div className="main__chart">chart</div>
            <div className="main__accountcontainer">
              <div className="main__latestaccount">
                <h3>Account holder</h3>
                <div className="main__accountwrapper">
                  <div className="flex flex-jc-sb main__user__account">
                    <span>Name</span>
                    <span>Account type</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Emmanuel</span>
                    <span>Savings</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Buchi</span>
                    <span>Current</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Amaka</span>
                    <span>Savings</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Amaka</span>
                    <span>Savings</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Amaka</span>
                    <span>Savings</span>
                  </div>
                </div>
              </div>
              <div className="main__acountusers">
                <h3>Latest Account Users</h3>
                <div className="main__accountwrapper">
                  <div className="flex flex-jc-sb main__user__account">
                    <span>Name</span>
                    <span>Account type</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Emmanuel</span>
                    <span>Savings</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Buchi</span>
                    <span>Current</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Amaka</span>
                    <span>Savings</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Amaka</span>
                    <span>Savings</span>
                  </div>
                  <div className="flex flex-jc-sb main__user__account main__user__account__bg">
                    <span>Amaka</span>
                    <span>Savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">@copy savannahbankng</footer>
      </div>
    );
  }
}
