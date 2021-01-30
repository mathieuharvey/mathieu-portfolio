import React from 'react';
import styles from './introduction.module.css';
import Link from 'next/link';

const Introduction = () => {
    return <div className={styles.container}>
        Hi! My name is Mathieu, and I am a UX/UI designer.
    </div>
}

Introduction.defaultProps = {

}

export default Introduction;
