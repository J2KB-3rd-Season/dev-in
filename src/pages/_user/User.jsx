import React from "react";
import ButtonOutline from "../../components/ButtonOutline";
import Tags from "../../components/Tags";
import Article from "../../components/user/Article";
import styles from "./User.module.scss";
export default function User() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="" alt="" className={styles.profileImg} />
        <div className={styles.profileName}>김현우</div>
        <div className={styles.profileSubname}>삼성전자 무선사업부</div>
        <div className={styles.profileDesc}>
          컴퓨터공학과 1학년 학생입니다. 안드로이드 개발자를 꿈꾸고 열심히
          커리어를 준비하고 있어요
        </div>
        <div className={styles.profileTags}>
          <Tags name="react" />
          <Tags name="react" />
          <Tags name="react" />
          <Tags name="react" />
          <Tags name="react" />
          <Tags name="react" />
        </div>
        <div className={styles.profileLinkBox}>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
        <ButtonOutline className={styles.proflieButton}>
          프로필 수정하기
        </ButtonOutline>
      </div>
      <div className={styles.main}>
        <div className={styles.mainTitleBox}>
          <div className={styles.titleBoxCard}>
            <div className={styles.CardTitle}>경험치</div>
            <div className={styles.CardDesc}>245</div>
          </div>
          <div className={styles.titleBoxCard}>
            <div className={styles.CardTitle}>티어</div>
            <div className={styles.CardDesc}>코린이👶</div>
          </div>
          <div className={styles.titleBoxCard}>
            <div className={styles.CardTitle}>순위</div>
            <div className={styles.CardDesc}>45674위</div>
          </div>
        </div>
        <div className={styles.mainSection}>
          <div className={styles.sectionTitle}>
            <div className={styles.sectionTitleText}>
              <div className={styles.title}>나의 질문</div>
              <div className={styles.number}>12</div>
            </div>
            <div className={styles.sectionTitleText}>
              <div className={styles.title}>나의 답변</div>
              <div className={styles.number}>12</div>
            </div>
          </div>
          <div className={styles.sectionList}>
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
}
