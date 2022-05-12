import { useState, useEffect, useRef } from 'react'

function getLocalTime (dateNow) {
  const dateOptions = {
    dateStyle: 'full',
    timeStyle: 'short'
  }
  const parseDate = (date) => {
    date = date.split(' ')
    const dayNumber = date[1]
    const month = date[3].slice(0, 3)
    return `${dayNumber} ${month}`
  }
  const formatDate = new Intl.DateTimeFormat('es-CO', { ...dateOptions }).format(dateNow)
  let [day, date, hour] = formatDate.split(',')
  date = parseDate(date)
  return {
    hour: hour.split(' ')[1],
    day: `${day.slice(0, 3)}, `,
    date
  }
}

function useTime () {
  const timeInterval = useRef()
  const [time, setTime] = useState(getLocalTime(Date.now()))

  useEffect(() => {
    timeInterval.current = setInterval(() => {
      setTime(getLocalTime(Date.now()))
    }, 1000)
    return () => {
      clearInterval(timeInterval.current)
    }
  }, [])

  return { time }
}
export { useTime }
