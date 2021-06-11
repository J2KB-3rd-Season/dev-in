import React from 'react'
//import { Link } from "react-router-dom";
import styles from './Profile.module.scss'

export default function Profile() {
  return (
    <div className={styles.box}>
      <h1>프로필 입력</h1>
      <img src="" alt=""/>
      <div>
          <h3>학교/전공</h3>
          <div>
            <span className={styles.school}>서울대학교</span>
            <span className={styles.major}>컴퓨터공학과</span>
            <span className={styles.term}>2015년 3월 ~ 2021년 3월</span>           
            <button className={styles.delBtn}>삭제</button>
          </div>
          <div>
            <input type="text" placeholder="학교를 입력해주세요." />
            <input type="text" placeholder="전공을 입력해주세요." />
          </div>
          <div>
            <input type="month"></input>
            <input type="month"></input>
            <button className={styles.addBtn}>추가</button>
          </div>
          <h3>회사</h3>
          <div>
            <span className={styles.company}>삼성전자</span>
            <span className={styles.job}>무선사업부</span>
            <span className={styles.term}>2022년 3월</span>           
            <button className={styles.delBtn}>삭제</button>
          </div>
          <div>
            <input type="text" placeholder="회사명을 입력해주세요." />
            <input type="text" placeholder="근무 부서를 입력해주세요." />
          </div>
          <div>
            <input type="month"></input>
            <input type="month"></input>
            <button className={styles.addBtn}>추가</button>
          </div>
          <h3>자기소개</h3>
          <textarea className={styles.introduce} placeholder="안녕하세요 어쩌구저쩌고 안녕하세요"></textarea>
          <h3>관심사</h3>
          <h5>1개 선택</h5>
          <div>
            <button className={styles.interest}>#react</button>
            <button className={styles.interest}>#java</button>
            <button className={styles.interest}>#javascript</button>
            <button className={styles.interest}>#jango</button>
            <button className={styles.interest}>#swift</button>
            <button className={styles.interest}>#vue</button>
          </div>
          <div>
            <button className={styles.interest}>#react</button>
            <button className={styles.interest}>#java</button>
            <button className={styles.interest}>#javascript</button>
            <button className={styles.interest}>#jango</button>
            <button className={styles.interest}>#swift</button>
            <button className={styles.interest}>#vue</button>
          </div>
          <div>
            <button className={styles.interest}>#react</button>
            <button className={styles.interest}>#java</button>
            <button className={styles.interest}>#javascript</button>
            <button className={styles.interest}>#jango</button>
            <button className={styles.interest}>#swift</button>
            <button className={styles.interest}>#vue</button>
          </div>
          <h3>소셜 계정 등록</h3>
          <div>
          <span className={styles.school}>instagram.com</span>
          <button className={styles.delBtn}>삭제</button>        
          </div>
          <div>
            <input type="text" className={styles.profileLink} placeholder="프로필에 등록할 소셜 계정의 링크를 입력해주세요." />
            <button className={styles.addBtn}>추가</button>
          </div>
          <div className={styles.button}>
          <button className={styles.completeBtn}>회원가입 완료</button>
          </div>
      </div>
    </div>
  )
}
