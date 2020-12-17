import React, { useState } from 'react'
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import Title from './Title'

export default React.memo(({ multiplier, setMultiplier, target, setTarget, n }) => {
    const [chance, setChance] = useState(target)

    const handleChance = (e) => {
        e.preventDefault()
        const updatedMultipiler = (n / e.target.value) * 100
        setMultiplier(updatedMultipiler.toPrecision(4))
        multiplierToChance()
    }
    const multiplierToChance = () => {
        const chancePercent = (n / multiplier) * 100
        console.log('chance percent,', n, multiplier)
        setTarget(chancePercent.toPrecision(4))
        setChance(chancePercent.toPrecision(4))
    }
    return <Container>
               <Title>CHANCE</Title>
               <Input value={chance} onChange={handleChance} type="text" />
           </Container>
})

const Input = s.input`
flex: 1;
background: ${color.darkPrim0};
border: none;
text-align: center;
padding: 12px;
border-radius: 8px;
color: ${color.lightPrim0};
`
const Container = s.div`
display: flex;
flex-direction: column;
flex: 1;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
