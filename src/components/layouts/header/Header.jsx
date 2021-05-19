import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <>
      <header className="wrap-container">
        <div className={styles.headerTitle}>
          <h2>
            <Link to="/">Dev-in</Link>
          </h2>
        </div>
        <div className={styles.headerMain}>
          <ul>
            <li>
              <h4>
                <Link to="/">소개</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/">커뮤니티</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/">랭킹</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/">고객센터</Link>
              </h4>
            </li>
          </ul>
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        <div>
          <ul className={styles.navList}>
            <li>
              <Link to="/user">my page</Link>
            </li>
          </ul>
        </div>

      </header>
    </>
  );
}
