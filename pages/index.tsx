import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect, ReactChildren } from "react";
import { Zoom } from "react-awesome-reveal";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Andres Logares</title>
        <meta name="description" content="Created by Andres Logares" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={styles.divTitle}>
          <Zoom className={styles.slide}>
            <h4 className={styles.h4Title}>Andrés Logares</h4>
            <h4 className={styles.h4Title}>Fullstack Developer</h4>
          </Zoom>
        </div>
        <Zoom className={styles.slide}>
          <div className={styles.divSubTitle}>
            <p className={styles.pSub}>Please select a language to continue</p>
          </div>
        </Zoom>
        <div className={styles.divButton}>
          <Zoom className={styles.slide}>
            <button onClick={() => router.push("/HomeSpanish")} className={styles.buttonLink}>Spanish</button>
          </Zoom>
          <Zoom className={styles.slide}>
            <button onClick={() => router.push("/HomeEnglish")} className={styles.buttonLink}>English</button>
          </Zoom>
        </div>
      </main>
    </div>
  );
};


export default Home;
