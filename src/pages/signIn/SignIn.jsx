import React from 'react'
import { Link } from "react-router-dom";
import styles from './SignIn.module.scss'

export default function SignIn() {
  return (
    <div className={styles.box}>
      <h2>로그인</h2>
      <button className={styles.googleLogin}>구글 아이디로 로그인하기</button>
      <button className={styles.githubLogin}>깃헙 아이디로 로그인하기</button>
      <hr/>
      <input type="email" placeholder="devin@email.com"></input>
      <input type="password" placeholder="패스워드 입력"></input>
      <button className={styles.signIn}>로그인</button>
      <div>
      <button className={styles.signUp}><Link to="/signUp">회원가입</Link></button>
      <button className={styles.findBtn}><Link to="/findId">아이디/패스워드찾기</Link></button>
      </div>
    </div>
  )
}
