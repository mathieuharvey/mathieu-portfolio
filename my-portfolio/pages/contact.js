import React, { useState, useEffect } from 'react';
import Header from '../comps/header';
import styles from '../styles/Home.module.css'

export default function Contact() {
  return ( <div>
    <Header></Header>
        <div className={styles.main}>
        <h2>Contact</h2>
        </div>
    </div>
  )
}