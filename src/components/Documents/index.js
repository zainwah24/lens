import React, { Component } from "react";
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

export class Documents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewDocument: false,
      selectedDocToView: "",
      docsList: docsList,
    };
  }

  setViewDocument = () => {
    this.setState({
      viewDocument: !this.state.viewDocument,
    });
  };

  selectDocToView = (doc) => {
    this.setState({
      viewDocument: true,
      selectedDocToView: doc,
    });
  };

  render() {
    return (
      <div className={styles.projectScope}>
        <div className={styles.projectScopeInner}>
          <div className={styles.scopeHandlers}>
            <div className={styles.scopeHandlersInner}>
              <div className={styles.breadCrumps}>
                <p>
                  Target_Name/Documents/
                  {this.state.viewDocument
                    ? this.state.selectedDocToView["hrefTxt"]
                    : ""}
                </p>
              </div>
              <div className={styles.listOfHandlers}>
                {this.state.viewDocument ? (
                  <button onClick={this.setViewDocument}>
                    Back
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          <div className={styles.scopeContent}>
            {this.state.viewDocument ? (
              <ViewDocument
                selectedDocToView={this.state.selectedDocToView}
              ></ViewDocument>
            ) : (
              <div className={styles.dselectedDocToViewocsListCont}>
                <div className={styles.docsListContInner}>
                  <div className={styles.headingCont}>
                    <div className={styles.headingContInner}>
                      <h2 className={styles.headingTxt}>
                        1. Business Overview
                      </h2>

                      <div className={styles.addBtnCont}>
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.docBody}>
                    {this.state.docsList.map((singleDoc, index) => (
                      <div key={index} className={styles.singleDoc}>
                        <div className={styles.docName}>
                          <p>{singleDoc["hrefTxt"]}</p>
                        </div>
                        <div
                          className={styles.visibilityIconCont}
                          onClick={() => this.selectDocToView(singleDoc)}
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
}

const ViewDocument = (props) => {
  return <div className={styles.viewDocCont}></div>;
};

export default Documents;
