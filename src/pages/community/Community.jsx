import React from 'react'
import styles from './Community.module.scss'
import QueryBox from '../../components/community/QueryBox'
import ArticleCard from '../../components/community/ArticleBox'

export default function Community() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerBoxWait}>
          <h3>답변을 기다리는 질문</h3>
          <QueryBox />
          <QueryBox />
        </div>
        <div className={styles.headerBoxInterest}>
          <h3>관심이 많은 질문</h3>
          <QueryBox />
          <QueryBox />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3>전체 질문</h3>
          <ul>
            <li>최신순</li>
            <li>관심순</li>
            <li>답변순</li>
          </ul>
        </div>
        <div className={styles.sectionContent}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </main>
  )
}
