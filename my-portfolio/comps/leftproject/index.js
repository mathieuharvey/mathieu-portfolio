import React from 'react';
import styled from 'styled-components';
import BasicButton from '../basicbutton';
import Link from 'next/link';
import styles from './leftproject.module.css';
import Image from 'next/image';

const Container = styled.div`
    position: relative;
    left: -100px;
    display:flex;
    align-items: center;
    justify-content: left;
    height: 30%;
    @media (max-width: 1000px) {
        flex-direction: column;
        left: 0;
    }
`
const Content = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    flex: 2;
    @media (max-width: 1000px) {
        margin: 10px 20px;
        align-items: center;
    }
`

const LeftProject = () => {
    return <Container>
        <Image src="/tutorpool-1.png" width="600" height="600" />
        <Content>
            <h3>
                Tutor Pool is a platform to connect high-school students in the Lower Mainland with a suitable tutor in a friendly learning environment. New and established tutors will benefit from the app by obtaining hands-on experience and revenue.
            </h3>
                <BasicButton text="Tutor Pool Case Study" />
        </Content>
    </Container>
}

LeftProject.defaultProps = {
                img: "../../public/tutorpool-1.png"
}

export default LeftProject;
