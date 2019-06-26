import React from 'react'

const Square = props => {
    const stylee = (props.isWin) ? 'squareWinner' : 'square'
    return (
        <button className={stylee} onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}

export default Square