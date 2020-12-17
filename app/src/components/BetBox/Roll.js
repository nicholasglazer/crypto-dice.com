import React, { useState } from "react"
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import Title from './Title'

export default React.memo(({target, setTarget}) => {
    const [toggle, setToggle] = useState(false)

    const handleRoll = () => {
        setToggle(!toggle)
        setTarget(Number(99.99 - target).toPrecision(4))
    }

    return <Container>
               <Title>{`ROLL ${toggle ? 'OVER' : 'UNDER'}`}</Title>
               <RollBox onClick={() => handleRoll()}>{target}</RollBox>
           </Container>
})
// TODO require
// max={9900}
// min={1.0102}
// precision={4}
// step={0.1}

const RollBox = s.div`
background: ${color.darkPrim0};
color: ${color.lightPrim0};
padding: 16px 24px;
border-radius: 8px;
`
const Container = s.div`
margin: 0 8px;

user-select: none;
cursor: pointer;
display: flex;
flex-direction: column;
flex: 0 1;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
