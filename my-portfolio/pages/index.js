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
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
    <Header></Header>
      <div  className={styles.main}>
        <Introduction/>
      </div>
    </div>
  )
}
