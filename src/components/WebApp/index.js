import React, { Component, useEffect, useState } from "react";
import styles from "./css/WebApp.module.css";

import Header from "../CommonComponents/Header";
import LeftSidebar from "../CommonComponents/LeftSidebar";

function WebApp(props) {
  const [leftSidebarState, setLeftSidebarState] = useState(true);

  return (
    <div className={styles.webApp}>
      <div className={styles.webAppInner}>
        <div className={styles.headerCont}>
          <Header
            setLeftSidebar={() => setLeftSidebarState(!leftSidebarState)}
            leftSidebarState={leftSidebarState}
          ></Header>
        </div>
        <div className={styles.leftSidebarCont}>
          {leftSidebarState ? (
            <LeftSidebar
              setLeftSidebar={() => setLeftSidebarState(!leftSidebarState)}
            ></LeftSidebar>
          ) : null}
        </div>
        <div className={styles.webBody}>
          <div className={styles.webBodyInner}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default WebApp;
