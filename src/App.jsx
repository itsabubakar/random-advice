import { useEffect, useState } from 'react'
import divider from './assets/pattern-divider-mobile.svg'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import dice from './assets/icon-dice.svg'
import './App.css'


// https://api.adviceslip.com/advice
// const fetchTours = async () => {
//   setLoading(true)
//   try {
//     const response = await fetch(url)
//     const tours = await response.json()
//     setLoading(false)
//     setTours(tours)
//   } catch (error) {
//     setLoading(false)
//     console.log(error)
//   }
// }
// useEffect(() => {
//   fetchTours()
// }, [])


export default function App() {
  const [urlId, setUrlId] = useState(4)
  const url = `https://api.adviceslip.com/advice/${urlId}`

  const [advice, setAdvice] = useState('Happiness is a journey, not a destination.')

  const fetchAdvice = async () => {
    try {
      const response = await fetch(url)
      const adviceSlip = await response.json()
      const advice = adviceSlip.slip.advice;
      setAdvice(advice)
      console.log(advice);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchAdvice()
  }, [urlId])

  return (
    <main>
      <section className='flex justify-center items-center h-[100vh]'>
        <div className='relative flex flex-col items-center px-5 pb-20 rounded-xl max-w-sm w-full mx-5 bg-DarkGrayishBlue min-h-[300px] text-LightCyan'>
          <h4 className='text-sm text-NeonGreen text-center py-8 uppercase tracking-[.18rem]'>advice #{urlId}</h4>
          <p className='text-[28px] text-center pb-3'>{advice}</p>
          <img src={divider} alt="" srcSet="" />
          <div className='absolute bottom-1 -mb-11 bg-NeonGreen rounded-full p-6' onClick={()=> setUrlId(urlId + 1)}>
            <img src={dice} alt="" className='w-9 '/>
          </div>
        </div>
      </section>
    </main>
  )
}
