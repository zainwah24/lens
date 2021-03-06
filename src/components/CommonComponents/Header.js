import React, { Component, useState, useEffect } from "react";
import styles from "./css/Header.module.css";

import { CalendarIcon, MessageIcon, BellIcon } from "../Svgs";
import MediaQuery from "react-responsive";

function Header(props) {
  const [toggleMsgNotifications, setMsgNotificationsToggle] = useState(false);
  const [toggleBellNotifications, setBellNotificationsToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const closeAllNotifications = () => {
    setMsgNotificationsToggle(false);
    setBellNotificationsToggle(false);
  };
  return (
    <div className={styles.headerCont}>
      <div className={styles.headerContInner}>
        <div className={styles.headerSections}>
          <div className={styles.leftPart}>
            <div className={styles.leftPartInner}>
              {props.leftSidebarState ? null : (
                <div
                  className={styles.groupIconCont}
                  onClick={props.setLeftSidebar}
                >
                  <img src="/assets/media/img/group.svg" />
                </div>
              )}

              <MediaQuery minWidth={768}>
                <TargetSector></TargetSector>
              </MediaQuery>
            </div>
          </div>
          <div className={styles.rightPart}>
            <div className={styles.rightPartInner}>
              <div className={styles.otherTogglersInfo}>
                <div className={`${styles.iconCont}`}>
                  <img src="/assets/media/img/schedule-meeting.svg" />
                </div>
                <div
                  className={`${styles.iconCont}`}
                  onClick={() => setMsgNotificationsToggle(!toggleMsgNotifications)}
                >
                  <img src="/assets/media/img/message-deactivated-alert.svg" />
                  {toggleMsgNotifications ? (
                    <MessageNotifications></MessageNotifications>
                  ) : null}
                </div>
                <div
                  className={`${styles.iconCont}`}
                  onClick={() => setBellNotificationsToggle(!toggleBellNotifications)}
                >
                  <img src="/assets/media/img/notification-deactivated-alert.svg" />
                  {toggleBellNotifications ? (
                    <BellNotifications></BellNotifications>
                  ) : null}
                </div>
              </div>
              <div className={styles.profileInfo}>
                <div className={styles.profileImg}>
                  <img src="/assets/media/img/investor-profile.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggleBellNotifications ||
      toggleMsgNotifications ? (
        <div
          className={styles.overlay}
          onClick={()=>closeAllNotifications()}
        ></div>
      ) : null}
    </div>
  );
}

export const TargetSector = () => {
  return (
    <div className={styles.targetSector}>
      <div className={styles.downIconCont}>
        <img src="/assets/media/img/bx-down-arrow.svg" />
      </div>
      <div className={styles.targetNameDesc}>
        <div className={styles.targetNameTxt}>Target_Name</div>
        <div className={styles.targetSectorTxt}>TARGET_SECTOR</div>
      </div>
      <div className={styles.preDealTxt}>
        <span>Pre-Deal</span>
      </div>
    </div>
  );
};

const MessageNotifications = () => {
  return (
    <div className={styles.notificationsCont}>
      <div className={styles.notificationsList}>
        <ul>
          <li>
            <a href="">Notification 1</a>
          </li>
          <li>
            <a href="">Notification 1</a>
          </li>
          <li>
            <a href="">Notification 1</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const BellNotifications = () => {
  return (
    <div className={styles.notificationsCont}>
      <div className={styles.notificationsList}>
        <ul>
          <li>
            <a href="">Notification 1</a>
          </li>
          <li>
            <a href="">Notification 1</a>
          </li>
          <li>
            <a href="">Notification 1</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
