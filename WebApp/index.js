import React, { Component } from "react";
import styles from "./css/WebApp.module.css";

import Header from "../CommonComponents/Header";
import LeftSidebar from "../CommonComponents/LeftSidebar";


export class WebApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      leftSidebarState: true,
    }
  }

  setLeftSidebar = () => {
    this.setState({
      leftSidebarState: !this.state.leftSidebarState
    })
  }
  
  render() {
    return (
      <div className={styles.webApp}>
        <div className={styles.webAppInner}>
          <div className={styles.headerCont}>
            <Header setLeftSidebar={this.setLeftSidebar} leftSidebarState={this.state.leftSidebarState}></Header>
          </div>
          <div className={styles.leftSidebarCont}>
            {
              this.state.leftSidebarState?
              <LeftSidebar setLeftSidebar={this.setLeftSidebar}></LeftSidebar>:
              null
            }
          </div>
          <div className={styles.webBody}>
            <div className={styles.webBodyInner}>
              {
                this.props.children
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebApp;
