import React, { useState, useEffect } from 'react';
import Header from '../comps/header';
import styles from '../styles/Home.module.css'

export default function About() {
  return ( <div>
    <Header></Header>
        <div className={styles.main}>
            <h2>About</h2>
        </div>
    </div>
  )
}