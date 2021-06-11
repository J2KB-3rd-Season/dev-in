import React from "react";
import Tags from "../Tags";
import styles from "./Article.module.scss";

export default function Article({ children }) {
  return (
    <div className={styles.listArticle}>
      <div>리액트 네이티브랑 코틀린이랑 문법이 비슷한가요?</div>
      <div className={styles.tagBox}>
        <Tags name="react" />
        <Tags name="react" />
        <Tags name="react" />
      </div>
      <div className={styles.articleList}>
        <div className={styles.articleListtitle}>
          <div>답변</div>
          <div>1</div>
        </div>
        <div className={styles.articleListDesc}>
          <div className={styles.ListDescTitle}>
            <img src="" alt="" />
            <div>김현우</div>
          </div>
          <div className={styles.ListDescDesc}>
            <div>활동요약</div>
            <div>2020년 12월 31일</div>
          </div>
        </div>
      </div>
    </div>
  );
}
