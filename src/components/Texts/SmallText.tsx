import styled from 'styled-components/native'
import React, {FunctionComponent} from 'react'


import { colors } from '../colors'

import { TextProps } from './types'

const StyledText = styled.Text`
    font-size: 13px;
    color: ${colors.darkgrey};
    text-align: center;
    font-family: Poppins-Regular;
`

const SmallText: FunctionComponent<TextProps> = (props) => {
  return (
  <StyledText style={props.textStyles}> {props.children} </StyledText>
  )
}

export default SmallText
