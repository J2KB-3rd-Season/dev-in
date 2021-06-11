import React from 'react'
import styles from './ArticleBox.module.scss'

export default function ArticleBox({content}) {
    const tags = content.tags;
    return (
        <div className={styles.box}>
            <div className={styles.boxTitle}>
                <h4>{content.title}</h4>
                <h6>{content.createdDate}</h6>
            </div>
            <div className={styles.boxContent}>
                저는 지금 막 CSS를 공부 중인 OOO입니다. 아무리 찾아 봐도 버그가 발생했을 때, 어떻게 풀어야 하는지 알 수가 없더라고요.
                XX 뜻도 잘 모르겠고 도움이 필요해요...
            </div>
            <div className={styles.boxBottom}>
                <ul>
                    {tags.map(tag => <li>{tag}</li>)}
                </ul>
                <h5>
                    답변{content.replyNum} 조회수108 관심{content.likeNum}
                </h5>
            </div>
        </div>
    )
}
