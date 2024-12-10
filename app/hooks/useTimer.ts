import { useState } from "react"

const useTimer = (duration: number) => {
    const [timer, setTimer] = useState<number>(duration)
    
    const startTimer = () => {
      setTimer(duration)
      const interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
  
      return () => clearInterval(interval)
    }
  
    return {timer, startTimer}
  }

    export default useTimer