import React from 'react'
import styles from './Community.module.scss'
import QueryBox from '../../components/community/QueryBox'
import ArticleCard from '../../components/community/ArticleBox'
import ArticleBoxList from '../../components/community/ArticleBoxList'

export default function Community() {
  const url = "http://localhost:8080/postlist/posts?size=10"
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerBoxWait}>
          <h2>답변을 기다리는 질문</h2>
          <QueryBox />
          <QueryBox />
        </div>
        <div className={styles.headerBoxInterest}>
          <h2>관심이 많은 질문</h2>
          <QueryBox />
          <QueryBox />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>전체 질문</h2>
          <ul>
            <li>최신순</li>
            <li>관심순</li>
            <li>답변순</li>
          </ul>
        </div>
        <div className={styles.sectionContent}>
          {/* <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard /> */}
          <ArticleBoxList url={url}/>
        </div>
      </div>
    </main>
  )
}
