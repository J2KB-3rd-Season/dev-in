import React from 'react'
import { Link } from "react-router-dom";
import styles from './IdConfirm.module.scss'

export default function IdConfirm() {
  return (
    <div className={styles.box}>
      <h2>아이디/비밀번호 찾기</h2>
      <span classNmae={styles.boxContent}>
        아이디는 <span className={styles.id}>devin******@gmail.com</span> 입니다.
      </span>
      <button className={styles.signIn}>로그인하기</button>
      <button className={styles.findPwd}><Link to="/findPwd">비밀번호 찾기</Link></button>
      <button className={styles.askId}>전체 아이디 문의하기</button>
    </div>

  )
}
