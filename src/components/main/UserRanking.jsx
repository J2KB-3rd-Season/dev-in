import React from 'react'
import styles from './UserRanking.module.scss'

export default function UserRanking() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <span className={styles.boxTitle}>
                    <span className={styles.rankingNum}>01</span>
                    <img src="" alt="" />
                </span>
                <span className={styles.job}>
                    <span>홍길동</span>
                    <img src="" alt="" className={styles.tier}/>
                    <div>
                        프론트엔드 개발자
                    </div>
                    <div className={styles.tag}>
                        javascript, jquery, java
                    </div>
                    <div>
                        질문수1234 답변수1234 추천수1245
                    </div>
                </span>
            </div>
            <div className={styles.box}>
                <span className={styles.boxTitle}>
                    <span className={styles.rankingNum}>02</span>
                    <img src="" alt="" />
                </span>
                <span className={styles.job}>
                    <span>홍길동</span>
                    <img src="" alt="" className={styles.tier}/>
                    <div>
                        서버 개발자
                    </div>
                    <div className={styles.tag}>
                        javascript, jquery, java
                    </div>
                    <div>
                        질문수1234 답변수1234 추천수1245
                    </div>
                </span>
            </div>
            <div className={styles.box}>
                <span className={styles.boxTitle}>
                    <span className={styles.rankingNum}>03</span>
                    <img src="" alt="" />
                </span>
                <span className={styles.job}>
                    <span>홍길동</span>
                    <img src="" alt="" className={styles.tier}/>
                    <div>
                        웹 개발자
                    </div>
                    <div className={styles.tag}>
                        javascript, jquery, java
                    </div>
                    <div>
                        질문수1234 답변수1234 추천수1245
                    </div>
                </span>
            </div>
        </div>
    )
}
