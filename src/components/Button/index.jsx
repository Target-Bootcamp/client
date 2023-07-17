import React from 'react'

// props : butname
// creator: elad nizrchi

export default function Button({ butoonName , type , onClick , className}) {

    return (
        <button className={className} onClick={onClick} type={type}>{butoonName}</button>
    )
}



