import React from 'react'
import { Link } from "react-router-dom";
import styles from './FindPwd.module.scss'

export default function FindPwd() {
  return (
   <div className={styles.box}>
      <h2>아이디/비밀번호 찾기</h2>
      <div>
      <button className={styles.idBox}><Link to="/findId">아이디</Link></button>
      <button className={styles.pwdBox}>비밀번호</button>
      </div>
      <input type="text" placeholder="이름을 입력해주세요."></input>
      <input type="text" placeholder="이메일 주소를 입력해주세요."></input>
      <button className={styles.getPwd}>임시 비밀번호 발급받기</button>
    </div>


  )
}
