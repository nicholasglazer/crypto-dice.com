import React from "react"
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import Title from './Title'

export default React.memo(({ multiplier, setMultiplier, setTarget, n }) => {
    const handleMultiplier = (e) => {
        //e.preventDefault()
        const m = parseInt(Number(e.target.value).toPrecision(6))
        setMultiplier(m.toPrecision(4))
        multiplierToTarget(m)
    }

    const multiplierToTarget = (m) => {
        const chancePercent = (n / m) * 100
        setTarget(chancePercent.toPrecision(4))
    }
    return <Container>
               <Title>MULTIPLIER</Title>
               <Input value={!!multiplier ? multiplier : ''} onChange={handleMultiplier} type={'text'} min="1.0102" max="9900" step="0.1" />
           </Container>
})
// TODO validation
// max={9900}
// min={1.0102}
// precision={4}
// step={0.1}

const Input = s.input`
flex: 1;
background: ${color.darkPrim0};
border: none;
text-align: center;
padding: 16px;
border-radius: 8px;
color: ${color.lightPrim0};
&:focus {
    outline: none;
}
`
const Container = s.div`
display: flex;
flex-direction: column;
flex: 1;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
