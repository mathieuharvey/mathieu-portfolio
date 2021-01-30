import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from '../comps/header';
import Introduction from '../comps/introduction';
import styles from '../styles/Home.module.css';

export default function Home() {
  return ( <div>
    <Head>
        <title>Mathieu Harvey</title>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Header></Header>
      <div  className={styles.main}>
        <Introduction/>
      </div>
    </div>
  )
}
