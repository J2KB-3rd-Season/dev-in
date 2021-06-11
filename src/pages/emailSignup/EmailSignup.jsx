import React from 'react'
import { Link } from "react-router-dom";
import styles from './EmailSignup.module.scss'

export default function EmailSignup() {
  return (
    <div className={styles.box}>
      <h2>회원가입</h2>
      <input type="text" placeholder="이름을 입력해주세요."/>
      <input type="email" placeholder="이메일 주소를 입력해주세요."/>
      <input type="password" placeholder="비밀번호를 입력해주세요."/>
      <div>
        <select name="mobileCarrier">
          <option value="">통신사선택</option>
          <option value="SKT">SKT</option>
          <option value="KT">KT</option>
          <option value="LG U+">LG U+</option>
          <option value="알뜰폰">알뜰폰</option>
        </select>
        <input type="text" className={styles.phoneNum} placeholder="핸드폰 번호를 입력해주세요." />
      </div>
      <div>
        <input type="text" className={styles.authNum} placeholder="인증번호를 입력해주세요." />
        <button className={styles.authConfirm}>확인</button>
      </div>
      <button className={styles.signUp}><Link to="/profile">다음</Link></button>
    </div>
  )
}
