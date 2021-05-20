import React from 'react'
import styles from './Ranking.module.scss'
export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <ul>
          <li>오늘</li>
          <li>이번주</li>
          <li>월간</li>
          <li>전체</li>
        </ul>
        <div>
          랭킹, 티어 제도 알아보기
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.rowHeader} >
          <div>순위</div>
          <div>티어</div>
          <div>유저</div>
          <div>경험치</div>
          <div>관심분야</div>
        </div>
        <div className={styles.row}>
          <div>001</div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <div>개발왕</div>
          </div>
          <div className={styles.exper}>
            경험치경험치경험치경험치
          </div>
          <div>
          <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div>001</div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <div>개발왕</div>
          </div>
          <div className={styles.exper}>
            경험치경험치경험치경험치
          </div>
          <div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
          </div>
          
        </div>
        <div className={styles.row}>
          <div>001</div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <div>개발왕</div>
          </div>
          <div className={styles.exper}>
            경험치경험치경험치경험치
          </div>
          <div>
          <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
          </div>
          
        </div>
        <div className={styles.row}>
          <div>001</div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
            <div>개발왕</div>
          </div>
          <div className={styles.exper}>
            경험치경험치경험치경험치
          </div>
          <div>
          <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
            <div className={styles.tag}>
              #react
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
