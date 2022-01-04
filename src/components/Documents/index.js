import React, { Component, useEffect, useState } from "react";
import styles from "./css/Documents.module.css";

const docsList = [
  {
    hrefTxt: "Target_Name Business Overview.pdf",
  },
  {
    hrefTxt: "Pitch Deck.pdf",
  },
  {
    hrefTxt: "Information Memorandum.pdf",
  },
];

function Documents(props) {
  const [viewDocument, setViewDocument] = useState(false);
  const [selectedDocToView, setSelectedDocToView] = useState(false);

  const selectDocToView = (doc) => {
    setViewDocument(true);
    setSelectedDocToView(doc);
  };

  return (
    <div className={styles.projectScope}>
      <div className={styles.projectScopeInner}>
        <div className={styles.scopeHandlers}>
          <div className={styles.scopeHandlersInner}>
            <div className={styles.breadCrumps}>
              <p>
                Target_Name/Documents/
                {viewDocument ? selectedDocToView["hrefTxt"] : ""}
              </p>
            </div>
            <div className={styles.listOfHandlers}>
              {viewDocument ? (
                <button onClick={() => setViewDocument(!viewDocument)}>
                  Back
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.scopeContent}>
          {viewDocument ? (
            <ViewDocument
              selectedDocToView={selectedDocToView}
            ></ViewDocument>
          ) : (
            <div className={styles.dselectedDocToViewocsListCont}>
              <div className={styles.docsListContInner}>
                <div className={styles.headingCont}>
                  <div className={styles.headingContInner}>
                    <h2 className={styles.headingTxt}>1. Business Overview</h2>

                    <div className={styles.addBtnCont}>
                      <button>Add</button>
                    </div>
                  </div>
                </div>
                <div className={styles.docBody}>
                  {docsList.map((singleDoc, index) => (
                    <div key={index} className={styles.singleDoc}>
                      <div className={styles.docName}>
                        <p>{singleDoc["hrefTxt"]}</p>
                      </div>
                      <div
                        className={styles.visibilityIconCont}
                        onClick={() => selectDocToView(singleDoc)}
                      >
                        <img src="/assets/media/img/visibility_black.svg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ViewDocument = (props) => {
  return <div className={styles.viewDocCont}></div>;
};

export default Documents;
