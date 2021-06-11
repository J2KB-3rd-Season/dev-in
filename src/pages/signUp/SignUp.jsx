import React from 'react'
import { Link } from "react-router-dom";
import styles from './SignUp.module.scss'

export default function SignUp() {
  return (
    <div className={styles.box}>
      <h2>회원가입</h2>
      <button className={styles.googleSignup}>구글 아이디로 회원가입</button>
      <button className={styles.githubSignup}>깃헙 아이디로 회원가입</button>
      <button className={styles.emailSignup}><Link to="/emailSignup">이메일로 회원가입</Link></button>
      <hr/>
      <button className={styles.signIn}>로그인</button>
      <button className={styles.findBtn}><Link to="/findId">아이디/패스워드찾기</Link></button>
    </div>
  )
}
