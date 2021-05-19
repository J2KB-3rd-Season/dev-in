import React, { useEffect, useState } from "react";
import style from "./Layout.module.scss";
import FooterContainer from "../../components/layouts/footer";
import HeaderContainer from "../../components/layouts/header";
import SectionContainer from "./section";

export default function Layout({ children }) {
  return (
    <>
      <div className={style.layout}>
        <HeaderContainer />
        <SectionContainer>{children}</SectionContainer>
        <FooterContainer />
      </div>
    </>
  );
}
