import React from "react"
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import Title from './Title'


export default React.memo(({ wager, setWager }) => {
    console.log('wagerl', wager)
    const handleWagerChange = (e) => {
        e.preventDefault()
        const v = !!e.target.value ? e.target.value : wager
        setWager(Number(v).toFixed(8))
    }

    const handleHalveWager = () => {
        setWager(Number(wager/2).toFixed(8))
    }

    const handleDoubleWager = () => {
        setWager(Number(wager*2).toFixed(8))
    }

    const handleMaxWager = () => {
        // If user is logged in, use their balance as max wager
        // TODO get the eth balance
        //setWager(balance)
    }

    return <Container>
               <Title>BET</Title>
               <Wager>
                   <Input value={wager} onChange={handleWagerChange} type="number" step="0.01" />
               </Wager>
               <BtnGroup>
                   <Button onClick={() => handleDoubleWager()}>x2</Button>
                   <Button onClick={() => handleHalveWager()}>/2</Button>
                   <Button onClick={() => handleMaxWager()}>MAX</Button>
               </BtnGroup>
           </Container>
})

const BtnGroup = s.div`
display: flex;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
overflow: hidden;
`
const Button = s.button`
border-radius: 0;
cursor: pointer;
flex: 1;
border: none;
padding: 6px 0;
background: ${color.darkPrim0};
color: ${color.lightPrim0};
border-right: 1px solid ${color.darkPrim20};
&: last-of-type {
border: none;
}
&:active {
background: ${color.darkPrim40};
box-shadow: 0 2px ${color.darkPrim20};
}
`

const Wager = s.div`
display: flex;
`
const Input = s.input`
flex: 1;
background: ${color.darkPrim0};
border: none;
text-align: center;
padding: 12px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
color: ${color.lightPrim0};
`

const Container = s.div`
display: flex;
flex-direction: column;
flex: 1;
margin-right: 8px;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
