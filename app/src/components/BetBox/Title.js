import React from "react"
import s from '@emotion/styled'
import { color, breakpoint } from '../../style/theme'
import Title from './Title'

export default React.memo(({children}) => {
    return <Container>
               {children}
           </Container>

})

const Container = s.div`
margin-bottom: 4px;
margin-left: 8px;
color: ${color.lightPrim0};
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 11px;
font-weight: 600;
letter-spacing: 0px;
@media screen and (min-width: ${breakpoint.mds}) {
}
`
