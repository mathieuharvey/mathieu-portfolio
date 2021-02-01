import React from 'react';
import styles from './basicbutton.module.css';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
    min-width:${props=>props.width ? props.width : "150px"};
    min-height:${props=>props.height ? props.height : "40px"};
    max-width:${props=>props.width ? props.width : "200px"};
    max-height:${props=>props.height ? props.height : "50px"};
    display:flex;
    background-color:${props=>props.bgcolor ? props.bgcolor : "#3185FC"};
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
    margin-top: 20px;
    :hover{
        box-shadow: 5px 5px 20px rgb(200, 200, 200);
        transform: scale(1.05);
    }
`

const BasicButton = ({text, source}) => {
    return <Container>
        <Link href={source}>
            {text}
        </Link>
    </Container>
}

BasicButton.defaultProps = {
    text:"Learn More",
    bgcolor:"",
    width:"",
    height:"",
    source:""
}

export default BasicButton;