import React, { useState } from "react"
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import config from '../../common/config'
// TODO change all inputs with form
//const { ContractData, ContractForm } = newContextComponents;
//import { newContextComponents } from "@drizzle/react-components";

//         <ContractData
//             drizzle={drizzle}
//             drizzleState={drizzleState}
//             contract="Dice"
//             method=""
//         />
//     <ContractForm drizzle={drizzle} contract="Dice" method="set" />

import Wager from './Wager'
import Chance from './Chance'
import Multiplier from './Multiplier'
import Profit from './Profit'
import Roll from './Roll'

export default React.memo(({ drizzle, drizzleState }) => {
    const [wager, setWager] = useState(Number(0.00000000).toFixed(8))
    const [multiplier, setMultiplier] = useState(parseFloat(2.0000))
    const [target, setTarget] = useState(parseFloat(49.50))
    const n = 1.0 - config.house_edge // n is 0.99 when house edge is 1%
    const maxProfit = 100 // TODO limit the bet not to exceed max profit in (BNB)

    const handleRoll = () => {
        // TODO test betting properly
        //console.log('')
    }

    return (
        <Container>
            <Box>
                <UpperBox>
                    <Wager wager={wager} setWager={setWager} />
                    <Profit wager={wager} multiplier={multiplier} />
                </UpperBox>
                <LowerBox>
                    <Multiplier multiplier={multiplier} setMultiplier={setMultiplier} setTarget={setTarget} n={n} />
                    <Roll target={target} setTarget={setTarget} />
                    <Chance multiplier={multiplier} setMultiplier={setMultiplier} target={target} setTarget={setTarget} n={n} />
                </LowerBox>
                <BetButton onClick={() => handleRoll()}>I'm Feeling Lucky</BetButton>
            </Box>
        </Container>
    )
})

const BetButton = s.button`
width: 228px;
padding: 16px;
border: none;
background: ${color.accent100};
border-radius: 8px;
color: ${color.lightPrim0};
font-size: 16px;
font-weight: 600;
margin: 0 auto;
cursor: pointer;
&:hover {
box-shadow: -2px 2px 16px 4px rgba(14,17,14, .12);
}
&:active {
box-shadow: inset 0px 0px 6px rgba(14,17,14, .8);
color: ${color.darkPrim0};
}
`

const UpperBox = s.div`
display: flex;
width: 100%;
margin-bottom: 24px;
`
const LowerBox = s.div`
display: flex;
margin-bottom: 36px;
width: 100%;
`
const Box = s.div`
width: 700px;
background: ${color.darkPrim20};
height: 340px;
border-radius: 16px;
padding: 24px;
box-shadow: -2px 2px 16px 4px rgba(14,17,14, .12);
display: flex;
flex-direction: column;
align-items: center;
> div {
padding: 8px;
}
`
const Container = s.div`
display: flex;
flex: 1;
justify-content: center;
margin-top: 144px;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
