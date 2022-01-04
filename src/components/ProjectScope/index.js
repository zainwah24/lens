import React, { Component, useEffect, useState } from "react";
import styles from "./css/ProjectScope.module.css";
import projectScopeDataStore from "../../DataStorage/projectScope.json";

import { ChevronBackward, ChevronForward, VisibilityBlack } from "../Svgs";

function ProjectScope() {
  const [editing, setEditing] = useState(false);
  const [addingNewScope, setAddingNewScope] = useState(false);
  const [shareScope, setShareScope] = useState(false);
  const [projectScopeData, setProjectScopeData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setProjectScopeData(projectScopeDataStore["data"]);
  }, []);

  const editingCompleted = () => {
    setAddingNewScope(false);
    setEditing(false);
  };

  const moveNext = () => {
    if (currentIndex < projectScopeData.length - 1) {
      setCurrentIndex(() => currentIndex + 1);
    }
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(() => currentIndex - 1);
    }
  };

  return (
    <div className={styles.projectScope}>
      <div className={styles.projectScopeInner}>
        <div className={styles.scopeHandlers}>
          <div className={styles.scopeHandlersInner}>
            {addingNewScope ? (
              <div className={styles.listOfHandlers}>
                <button onClick={() => editingCompleted()}>Done</button>
              </div>
            ) : editing ? (
              <div className={styles.listOfHandlers}>
                <button onClick={() => setAddingNewScope(!addingNewScope)}>
                  Add to Scope
                </button>
                <button
                  onClick={() => editingCompleted()}
                  style={{ color: "var(--secondary)" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className={styles.listOfHandlers}>
                <button onClick={() => setEditing(!editing)}>Edit</button>
                <button onClick={() => setShareScope(!shareScope)}>
                  Share
                </button>
                <button className={styles.submitBtn}>Submit</button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.scopeContent}>
          {addingNewScope ? (
            <AddToScope projectScopeData={projectScopeData}></AddToScope>
          ) : (
            <div className={styles.scopeContentHeadingList}>
              {projectScopeData.map((scopeList, index) =>
                currentIndex == index ? (
                  <ProjectListBlock
                    key={index}
                    counter={index}
                    noOfscopeTypes={projectScopeData.length}
                    currentIndex={currentIndex}
                    scopeList={scopeList}
                    moveNext={moveNext}
                    movePrev={movePrev}
                    editing={editing}
                  ></ProjectListBlock>
                ) : null
              )}
            </div>
          )}

          {shareScope ? (
            <ShareScopeForReview
              setShareScope={()=>setShareScope(!shareScope)}
            ></ShareScopeForReview>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const ProjectListBlock = (props) => {
  return (
    <div>
      <div>
        <div className={styles.headingCont}>
          <div className={styles.headingContInner}>
            <div
              onClick={props.movePrev}
              className={`${styles.chevIconCont} ${
                props.currentIndex == 0 ? styles.disable : ""
              }`}
            >
              <span>
                <ChevronBackward />
              </span>
            </div>
            <div className={styles.headingTxt}>
              <span>{props.scopeList["heading"]}</span>
            </div>
            <div
              onClick={props.moveNext}
              className={`${styles.chevIconCont} ${
                props.currentIndex == props.noOfscopeTypes - 1
                  ? styles.disable
                  : ""
              }`}
            >
              <span>
                <ChevronForward />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.listItems}>
          <div className={styles.listItemsInner}>
            <ul>
              {props.scopeList["scope_list"].map((listItem, index) => (
                <li key={index}>
                  {props.editing ? (
                    <div className={styles.checkedIconCont}>
                      <img src="/assets/media/img/checked-box.svg" />
                    </div>
                  ) : null}

                  <div>{listItem}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddToScope = (props) => {
  const [scopeName, setScopeName] = useState("");
  const [fileNameToShare, setFileNameToShare] = useState(
    "Target_Name Scope.pdf"
  );
  const [note, setNote] = useState("");

  const [listOfCategories, setListOfCategories] = useState(false);

  return (
    <div className={styles.addToScope}>
      <div className={styles.addToScopeInner}>
        <div className={styles.modalBody}>
          <div>
            <div className={styles.inputField}>
              <div className={styles.label}>
                <span>Category</span>
              </div>
              <div
                className={styles.input}
                onClick={() => setListOfCategories(!listOfCategories)}
              >
                <input
                  type="text"
                  placeholder="Select"
                  value={scopeName}
                  readOnly={true}
                />

                {listOfCategories ? (
                  <div className={styles.categoriesDropDown}>
                    <div className={styles.categoriesDropDownInner}>
                      <ul>
                        {props.projectScopeData.map((singleScope, index) => (
                          <li
                            onClick={() => setScopeName(singleScope["heading"])}
                          >
                            {singleScope["heading"]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
              <div></div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.label}>
                <span>Scope</span>
              </div>
              <div className={styles.textarea}>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={styles.formAction} style={{ marginTop: "40px" }}>
              <div className={styles.addBtnCont}>
                <button>Add</button>
              </div>
              <div
                className={styles.cancelBtnCont}
                onClick={props.setShareScope}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareScopeForReview = (props) => {
  const [consultantName, setConsultantName] = useState("");
  const [fileNameToShare, setFileNameToShare] = useState(
    "Target_Name Scope.pdf"
  );
  const [note, setNote] = useState("");
  return (
    <div className={styles.shareScopeModaleCont}>
      <div className={styles.shareScopeModaleContInner}>
        <div className={styles.logoCont}>
          <img src="/assets/logo/logo.svg" />
        </div>
        <div className={styles.formModal}>
          <div className={styles.formModalInner}>
            <div className={styles.modalHeading}>
              <h2>Share scope for review</h2>
            </div>
            <div className={styles.modalBody}>
              <div>
                <div className={styles.inputField}>
                  <div className={styles.label}>
                    <span>To</span>
                  </div>
                  <div className={styles.input}>
                    <input
                      type="text"
                      placeholder="Add Consultants"
                      value={consultantName}
                      onChange={(e) => setConsultantName(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.label}>
                    <span>Add a note</span>
                  </div>
                  <div className={styles.textarea}>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className={styles.notesCont}>
                  <div className={styles.noteName}>{fileNameToShare}</div>
                  <div className={styles.visibilityIconCont}>
                    <VisibilityBlack />
                  </div>
                </div>
                <div className={styles.formAction}>
                  <div className={styles.sendBtnCont}>
                    <button>Send</button>
                  </div>
                  <div
                    className={styles.cancelBtnCont}
                    onClick={props.setShareScope}
                  >
                    <button>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScope;
