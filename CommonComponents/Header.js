import React, { Component } from "react";
import styles from "./css/Header.module.css";

import { CalendarIcon, MessageIcon, BellIcon } from "../Svgs";
import MediaQuery from 'react-responsive'

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleMsgNotifications: false,
      toggleBellNotifications: false,
    };
  }

  setMsgNotificationsToggle = () => {
    this.setState({
      toggleMsgNotifications: !this.state.toggleMsgNotifications,
    });
  };

  setBellNotificationsToggle = () => {
    this.setState({
      toggleBellNotifications: !this.state.toggleBellNotifications,
    });
  };

  render() {
    return (
      <div className={styles.headerCont}>
        <div className={styles.headerContInner}>
          <div className={styles.headerSections}>
            <div className={styles.leftPart}>
              <div className={styles.leftPartInner}>
                {this.props.leftSidebarState ? null : (
                  <div
                    className={styles.groupIconCont}
                    onClick={this.props.setLeftSidebar}
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
                    onClick={this.setMsgNotificationsToggle}
                  >
                    <img src="/assets/media/img/message-deactivated-alert.svg" />
                    {this.state.toggleMsgNotifications ? (
                      <MessageNotifications></MessageNotifications>
                    ) : null}
                  </div>
                  <div
                    className={`${styles.iconCont}`}
                    onClick={this.setBellNotificationsToggle}
                  >
                    <img src="/assets/media/img/notification-deactivated-alert.svg" />
                    {this.state.toggleBellNotifications ? (
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
      </div>
    );
  }
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
