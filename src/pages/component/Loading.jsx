import React from 'react'
import DiceLoader from 'public/icon-dice.svg'
import Image from 'next/image'
import 'src/app/app.css'

function Loading() {

    // create style for the loader rotation
    const rotate = {
        animation: 'rotate 1s linear infinite'
    }

    return (
        <>
            <Image
                src={DiceLoader}
                alt="Dice-Loader"
                className='dice-loader'
                style={rotate}

            />
        </>
    )
}

export default Loading