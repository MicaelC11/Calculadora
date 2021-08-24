import React from 'react'
import './Button.css'


export default props => {
    let classes = 'button ' // Por conta da concatenação tem que colocar o espaço depois do 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
        {props.label}
    </button>
    )
}

/* EX 1
export default props => 
        <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}>
        {props.label}
    </button>
}
*/

/* EX 2
export default props => {
    return (
        <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        `}>
        {props.label}
    </button>
    )
}
*/