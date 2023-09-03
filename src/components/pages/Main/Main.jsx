import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import m from "./main.module.scss";
import { useState } from "react";
import { Text14400 } from "../../atoms/Text";
import Header from "../../organisms/Header";

const Main = () => {
  //---------------------------------------------------
  return (
    <div className={m.main__wrapper}>
      <Header />
      <div className={m.container}>
        
      </div>
    </div>
  );
};
export default Main;
