import React, { useState } from 'react'
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import { Link } from "react-router-dom";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData } = newContextComponents;

export default React.memo(({ drizzle, drizzleState}) => {
    return (
        <Container>
            <AppName>
                <Link to='/'>
                    crypto-dice.com
                </Link>
            </AppName>
            <AccData>
                <AccountData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    accountIndex={0}
                    units="ether"
                    precision={8}
                />
            </AccData>
        </Container>
    )
})

const AccData = s.div`
color: ${color.darkPrim80};
background: ${color.darkPrim20};
padding: 8px 32px;
border-radius: 12px;
> div p {
text-align: end;
color: ${color.lightPrim0};
}
`
const Container = s.header`
display: flex;
flex: 0;
justify-content: space-between;
align-items: center;
margin: 18px 24px 16px 24px;
@media screen and (min-width: ${breakpoint.mds}) {
margin: 18px 36px 16px 32px;
}
`
const UserWrapper = s.div`
cursor: pointer;
&:hover {
border-radius: 12px;
transition: background 0.43s ease;
}
`
const AppName = s.div`
align-self: flex-start;
margin-top: 24px;
> a {
font-size: 17px;
color: ${color.accent100};
font-weight: 600;
text-decoration: none;
}
`
