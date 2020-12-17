import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import s from '@emotion/styled'
import { color } from './style/theme'
import Header from './components/Header/'
import BetBox from './components/BetBox/'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const { ContractData, ContractForm } = newContextComponents;

export default React.memo(({ drizzle, drizzleState }) => {
    return (
        <Container className="App">
            <Header drizzle={drizzle} drizzleState={drizzleState} />
            <BetBox />
            <ToastContainer />
        </Container>
    )
})

const Container = s.div`
background: ${color.darkPrim0};
display: flex;
flex-direction: column;
width: 100wh;
height: 100vh;
`
