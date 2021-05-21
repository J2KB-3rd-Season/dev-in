import React from "react";
//import showdown from "showdown";
import styles from './Preview.module.scss'
const Preview = ({ inputValue }) => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(inputValue);

    return (
        <div className={styles.preview} dangerouslySetInnerHTML={{ __html: html }} />
    );
}

export default Preview;