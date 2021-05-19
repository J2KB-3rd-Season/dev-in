import React from "react";
import { Link, Router } from "react-router-dom";
import styles from "./Nav.module.scss";
export default function Nav() {
  return (
    <nav>
      <div className="nav-content wrap-container">
        <ul className={styles.navList}>
          <li>
            <Link to="/user">overview</Link>
          </li>
          <li>
            <Link to="/user/repositories">tils</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
