import {useEffect, useState} from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="text-8xl font-black  p-4 text-white">{time.toLocaleTimeString()}</div>
  )
}

export default Clock