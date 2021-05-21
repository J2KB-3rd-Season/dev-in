import React from 'react'
import styles from './NewQuestion.module.scss'

export default function NewQuestion() {
    return (
        <div className={styles.box}>
            <div className={styles.boxTitle}>
                <h4>리액트 네이티브랑 코틀린이랑 문법이 비슷한가요?</h4>
            </div>
            <div className={styles.tag}>
                <ul>
                    <li>#react</li>
                    <li>#java</li>
                    <li>#javascript</li>
                </ul>
            </div>
            <span className={styles.boxBottom}>
                <span>답변 0</span>
                <img src="" alt="" />
                <span>홍길동 활동요약 37초전</span>
            </span>
        </div>
        
    )
}
