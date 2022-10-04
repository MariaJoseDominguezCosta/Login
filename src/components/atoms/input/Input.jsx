import React from 'react'
import styled from 'styled-components'
import styles from './Input.css';


const StyledTextarea = styled.text`${styles}`
const StyledSelect = styled.select`${styles}`
const StyledInput = styled.input`${styles}`

const Input = ({ ...props }) => {
    const { type } = props
    if (type === 'textarea') {
        return <StyledTextarea {...props} />
    } if (type === 'select') {
        return <StyledSelect {...props} />
        
    }
    return <StyledInput {...props} />
}
export default Input;