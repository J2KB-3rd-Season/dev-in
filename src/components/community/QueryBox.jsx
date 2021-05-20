import React from 'react'
import styles from './QueryBox.module.scss'

export default function QueryBox() {
    return (
        <div className={styles.box}>
            <div className={styles.boxTitle}>
                <img src="" alt="" />
                <h4>홍길동</h4>
                <h6>37초 전</h6>
            </div>
            <div className={styles.boxContent}>
                <div>
                    OOO을 잘 하려면 어떤 방법으로 공부를 해야 할까요?
                </div>
                <div className={styles.boxContentAnswer}>
                    답변 0
                </div>
            </div>
        </div>
    )
}
