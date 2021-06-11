import React from 'react'
import styles from './Main.module.scss'

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.questionBox}>
          <h2>질문하기</h2>
          <h4>제목</h4>
          <input type="text" className={styles.title} placeholder="리액트에서 어쩌구 저쩌구 하는데 어떻게 해야 하나요?" />
          <h4>내용</h4>
          <div className={styles.contentsBox}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
            <hr/>
            <textarea className={styles.contents} placeholder="리액트에서 어쩌구 저쩌구하는데 어덯게 해야하나요?">
            </textarea>
          </div>
          <div className={styles.preview}>미리 보기 영역</div>
          <h4>태그(최대 5개)</h4>
          <input type="text" className={styles.tag} placeholder="#react"></input>
          <div className={styles.buttonBox}>
            <button className={styles.temporaryStorage}>임시 저장 12</button>
            <button className={styles.saveQuestion}>질문 등록하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}
