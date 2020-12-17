import React from "react"
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import Title from './Title'
import { BNBIcon } from '../../icons/icons'

export default React.memo(({ wager, multiplier }) => {
    const calculated = wager * (multiplier - 1)
    const profit = calculated ? calculated.toFixed(8) : Number(0.00000000).toFixed(8);
    return <Container>
               <Title>PROFIT</Title>
               <ProfitBox>
                   <Total>
                       {profit}
                   </Total>
                   <IconWrapper>
                       <BNBIcon />
                   </IconWrapper>
               </ProfitBox>
           </Container>

})

const Total = s.div`
flex: 1;
display: flex;
justify-content: center;
`
const IconWrapper = s.div`
flex: 0;
margin-right: 12px;
> svg {
max-width: 20px;
max-height: 20px;
}
`
const ProfitBox = s.div`
background: ${color.darkPrim0};
border-radius: 8px;
color: ${color.lightPrim0};
flex: 1;
display: flex;
align-items: center;
`
const Container = s.div`
display: flex;
flex: 1;
flex-direction: column;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
