import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <>
      <header className="wrap-container">
        <Link to="/">
          <div className={styles.headerTitle}>
            <img src="/images/Logo.png" alt="" />
            <h2>Dev-in</h2>
          </div>
        </Link>
        <div className={styles.headerMain}>
          <ul>
            <li>
              <h4>
                <Link to="/intro">소개</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/community">커뮤니티</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/ranking">랭킹</Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to="/service">고객센터</Link>
              </h4>
            </li>
          </ul>
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        <div>
          <ul className={styles.headerTools}>
            <li>
              <Link to="/user">
                <img src="" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
