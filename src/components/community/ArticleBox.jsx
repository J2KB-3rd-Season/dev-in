import React from 'react'
import styles from './ArticleBox.module.scss'

export default function ArticleBox() {
    return (
        <div className={styles.box}>
            <div className={styles.boxTitle}>
                <h4>CSS 공부 방법</h4>
                <h6>05/10</h6>
            </div>
            <div className={styles.boxContent}>
                저는 지금 막 CSS를 공부 중인 OOO입니다. 아무리 찾아 봐도 버그가 발생했을 때, 어떻게 풀어야 하는지 알 수가 없더라고요.
                XX 뜻도 잘 모르겠고 도움이 필요해요...
            </div>
            <div className={styles.boxBottom}>
                <ul>
                    <li>#버그</li>
                    <li>#CSS</li>
                    <li>#코딩독학</li>
                    <li>#코딩초보</li>
                </ul>
                <h5>
                    답변4 조회수108 관심15
                </h5>
            </div>
        </div>
    )
}
