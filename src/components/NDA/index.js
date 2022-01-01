import React, { Component } from "react";
import styles from "./css/NDA.module.css";

export class NDA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ndaReview: true,
      sineesProfileImages: [
        {
          src: "/assets/media/img/investor-profile.png",
        },
      ],
    };
  }

  setNdaReview = () => {
    this.setState({
      ndaReview: !this.state.ndaReview,
    });
  };

  render() {
    return (
      <div className={styles.projectScope}>
        <div className={styles.projectScopeInner}>
          <div className={styles.scopeContent}>
            <div className={styles.signees}>Signess</div>
            <div className={styles.profileImages}>
              <div className={styles.innerProfileImages}>
                {this.state.sineesProfileImages.map((singleProfile, index) => (
                  <div key={index} className={styles.profileImageCont}>
                    <img src={singleProfile["src"]} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.docCont}>
              <div className={styles.docContInner}></div>
            </div>
          </div>
          {this.state.ndaReview ? (
            <NDAReview setNdaReview={this.setNdaReview}></NDAReview>
          ) : null}
        </div>
      </div>
    );
  }
}

const NDAReview = (props) => {
  return (
    <div className={styles.shareScopeModaleCont}>
      <div className={styles.shareScopeModaleContInner}>
        <div className={styles.logoCont}>
          <img src="/assets/logo/logo.svg" />
        </div>
        <div className={styles.modalCont}>
          <div className={styles.modalContInner}>
            <div className={styles.headingCont}>
              <div className={styles.h2}>
                <h2>Review NDA</h2>
              </div>
              <div className={styles.btns}>
                <div className={styles.exitBtn} onClick={props.setNdaReview}>
                  <button>Exit</button>
                </div>
                <div className={styles.acceptBtn}>
                  <button>Accept & Continue</button>
                </div>
              </div>
            </div>
            <div className={styles.dateValidity}>
              <div className={styles.dateValidityInner}>
                <span>
                  <span className={styles.targetName}>&lt;Target Name&gt;</span>{" "}
                  Valid until: &lt;Valid Until Date DD/MM/YYY)
                </span>
              </div>
            </div>
            <div className={styles.docCont}>
              <div className={styles.docContInner}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NDA;
