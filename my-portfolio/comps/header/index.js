import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return <div className={styles.container}>
        <div className={styles.links}>
            <Link href="/">
            <a className={styles.menu}>home</a>
            </Link>
            <Link href="/projects">
                <a className={styles.menu}>projects</a>
            </Link>
            <Link href="/about">
            <a className={styles.menu}>about</a>
            </Link>
            <Link href="/contact">
            <a className={styles.menu}>contact</a>
            </Link>
        </div>
        <div className={styles.menuIcon}>
            <Image src="/menu-icon-01.png" width={50} height={50}/>
        </div>
    </div>
}

Header.defaultProps = {

}

export default Header;

// function Header(){
//     return (
//         <div className="">

//         </div>
//     )
// }

// export default Header