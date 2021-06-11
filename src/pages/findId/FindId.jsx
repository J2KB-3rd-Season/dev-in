import React from 'react'
import { Link } from "react-router-dom";
import styles from './FindId.module.scss'

export default function FindId() {
  return (
    <div className={styles.box}>
      <h2>아이디/비밀번호 찾기</h2>
      <div>
      <button className={styles.idBox}>아이디</button>
      <button className={styles.pwdBox}><Link to="/findPwd">비밀번호</Link></button>
      </div>
      <input type="text" placeholder="이름을 입력해주세요."></input>
      <div>
        <select name="mobileCarrier">
          <option value="">통신사선택</option>
          <option value="SKT">SKT</option>
          <option value="KT">KT</option>
          <option value="LG U+">LG U+</option>
          <option value="알뜰폰">알뜰폰</option>
        </select>
        <input type="text" className={styles.phoneNum} placeholder="핸드폰 번호를 입력해주세요."></input>
      </div>
      <div>
        <input type="text" className={styles.authNum} placeholder="인증번호를 입력해주세요."></input>
        <button className={styles.authConfirm}>확인</button>
      </div>
      <button className={styles.findId}>아이디 찾기</button>
    </div>
  )
}
