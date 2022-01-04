import React, { Component, useEffect, useState } from "react";
import { ChevronForward, Clear } from "../Svgs";
import styles from "./css/LeftSidebar.module.css";
import { Link } from "react-router-dom";
import { TargetSector } from "./Header";
import MediaQuery from "react-responsive";

const firstNavbarData = [
  {
    hrefTxt: "Overview",
    urlTxt: "overview",
  },
  {
    hrefTxt: "Documents",
    urlTxt: "documents",
  },
  {
    hrefTxt: "Project Scope",
    urlTxt: "project-scope",
  },
  {
    hrefTxt: "Proposal",
    urlTxt: "proposal",
  },
];

const secondNavbarData = [
  {
    hrefTxt: "Team",
    urlTxt: "team",
  },
  {
    hrefTxt: "NDA",
    urlTxt: "nda",
  },
  {
    hrefTxt: "Getting Started",
    urlTxt: "getting-started",
  },
];

function LeftSidebar(props) {
  return (
    <div className={styles.leftSidebar}>
      <div className={styles.leftSidebarInner}>
        <div className={styles.logoCont}>
          <div className={styles.logoContInner}>
            <img src="/assets/logo/logo-white.svg" />
          </div>

          <div
            className={styles.clearIconCont}
            onClick={props.setLeftSidebar}
          >
            <Clear />
          </div>
        </div>

        <div className={styles.firstListCont}>
          <div className={styles.firstListContInner}>
            <ul>
              {firstNavbarData.map((singleLink, index) => (
                <li key={index}>
                  <Link to={`/${singleLink["urlTxt"]}`}>
                    <div className={styles.textAndChevron}>
                      <div className={styles.hrefTxt}>
                        {singleLink["hrefTxt"]}
                      </div>
                      <div className={styles.chevronCont}>
                        <ChevronForward />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <MediaQuery maxWidth={768}>
          <TargetSector></TargetSector>
        </MediaQuery>

        <div className={styles.dueByCont}>
          <div className={styles.dueByContInner}>
            <div className={styles.dueBy}>
              <span>DUE BY</span>
            </div>
            <div className={styles.dueByDate}>
              <span>25/12/2021</span>
            </div>
          </div>
        </div>

        <div className={styles.secondListCont}>
          <div className={styles.secondListCont}>
            <ul>
              {secondNavbarData.map((singleLink, index) => (
                <li key={index}>
                  <Link to={`/${singleLink["urlTxt"]}`}>
                    <div className={styles.textAndChevron}>
                      <div className={styles.hrefTxt}>
                        {singleLink["hrefTxt"]}
                      </div>
                      <div className={styles.chevronCont}>
                        <ChevronForward />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
