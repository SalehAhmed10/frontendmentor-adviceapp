"use client"
import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
import Image from 'next/image'

import './app.css'
import Dice from 'public/icon-dice.svg'
import Divider from 'public/pattern-divider.svg'
import Loading from '@/pages/component/Loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  const getData = async () => {
    setLoading(true)
    const response = await fetch('/api/advice')
    const data = await response.json()
    setData(data.slip)
    setLoading(false)
    // console.log('clicked')
    // console.log(data.slip)

  }


  return (
    <main>

      <div class="advice-container">


        <p class="advice-id">
          {loading ? '' : (
            <>
              Advice <span id="advice-number"> {data.iď === 0 ? '' : (<> #{data.id} </>)} </span>
            </>
          )}

        </p>


        <p class="advice-text">
          {loading ? <Loading /> : (
            <>
              {data.advice || 'Click the dice to get some advice'}
            </>
          )}
        </p>

      </div>


      <Image src={Divider} alt="divider" className='divider' />


      <button id="dice" onClick={getData} >
        {/* <img src="images/icon-dice.svg" alt="Dice to generate new advice" /> */}
        <Image src={Dice} alt="dice" />
      </button>

    </main>

  )
}
