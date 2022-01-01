import React, { Component } from "react";
import styles from "./css/Overview.module.css";

export class Overview extends Component {
  render() {
    return (
      <div className={styles.projectScope}>
        <div className={styles.projectScopeInner}>
          <div className={styles.scopeHandlers}>
            <div className={styles.scopeHandlersInner}>
              <div className={styles.breadCrumps}>
                <p>
                  Target_Name/Overview
                </p>
              </div>
              <div className={styles.listOfHandlers}>
              </div>
            </div>
          </div>

          <div className={styles.scopeContent}>
            <div className={styles.scopeContentInner}>
                <div className={styles.targetCont}>
                    <div className={styles.targetContInner}>
                        <div className={styles.targetMetaInfo}>
                            <div className={styles.metaInfoSection}>
                                <div className={styles.targetName}>
                                    <h2>Target Name</h2>
                                </div>
                                <div className={styles.webInfo}>
                                    <p>Target Sector</p>
                                    <p>www.target-website.com</p>
                                    <p className={styles.projectDeadline}>Project Deadline: 22/12/2021</p>
                                </div>
                            </div>
                            <div className={styles.uploadArea}>
                                <div className={styles.uploadAreaInner}>
                                    <span>Target Logo if uploaded</span>
                                    <span>Max. 350 x 120 px</span>
                                </div>
                            </div>
                        </div>  
                        <div className={styles.targetData}>
                            <div className={styles.employeesInfo}>
                                <div className={styles.number}>500,000</div>
                                <div className={styles.txt}>EMPLOYEES</div>
                            </div>
                            <div className={styles.businessTypeInfo}>
                                <div className={styles.number}>B2B</div>
                                <div className={styles.txt}>BUSINESS TYPE</div>
                            </div>
                            <div className={styles.revenueInfo}>
                                <div className={styles.number}>£200M</div>
                                <div className={styles.txt}>REVENUE</div>
                            </div>
                        </div>
                        <div className={styles.targetDescription}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar fermentum arcu et posuere. Suspendisse viverra, sapien eu imperdiet elementum, orci leo pharetra diam, ut mollis nunc tortor vel tellus. Duis sapien ex, dictum vitae eleifend quis, tempus at urna. Nam ut consectetur lectus. Suspendisse ornare dolor mi, accumsan ornare purus iaculis at. Etiam feugiat at quam non maximus. Suspendisse quis sapien a nulla elementum molestie non nec sem. Sed auctor mattis nisi, vitae lacinia orci varius id. Nunc a nulla convallis, volutpat magna luctus, aliquet massa. Donec diam mauris, vulputate non ullamcorper et, volutpat sed lorem. Vivamus viverra ultricies eleifend. Nam quis diam quis metus ullamcorper mattis. Etiam eu nulla luctus, finibus felis vel, suscipit nisi. Nullam purus arcu, semper ac ornare nec, imperdiet ac justo. Pellentesque maximus varius sodales.</p>
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

export default Overview;
