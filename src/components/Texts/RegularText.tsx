import styled from 'styled-components/native'
import React, {FunctionComponent} from 'react'


import { colors } from '../colors'

import { TextProps } from './types'

const StyledText = styled.Text`
    font-size: 15px;
    color: ${colors.darkgrey};
    text-align: center;
    font-family: Poppins-Medium;
`

const RegularText: FunctionComponent<TextProps> = (props) => {
  return (
  <StyledText style={props.textStyles}> {props.children} </StyledText>
  )
}

export default RegularText
