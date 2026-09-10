import type { Diff } from '../types/Diff'
import { useState, useEffect } from 'react'

const MS_PER_SECOND = 1000
const MS_PER_MINUTE = 60_000
const MS_PER_HOUR = 3_600_000
const MS_PER_DAY = 86_400_000
const HEARTBEATS_PER_MINUTE = 75
const START = new Date(2024, 8, 13, 19, 0, 0, 0)

const br = (n: number) => n.toLocaleString('pt-BR')
const pad = (n: number) => String(n).padStart(2, '0')
const plural = (n: number, one: string, many: string) => (n === 1 ? one : many)

function getDiff(begin: Date, end: Date): Diff {
  let yearDiff = end.getFullYear() - begin.getFullYear()
  let monthDiff = end.getMonth() - begin.getMonth()
  let dayDiff = end.getDate() - begin.getDate()
  let hourDiff = end.getHours() - begin.getHours()
  let minuteDiff = end.getMinutes() - begin.getMinutes()
  let secondDiff = end.getSeconds() - begin.getSeconds()

  if (secondDiff < 0) ((secondDiff += 60), (minuteDiff -= 1))
  if (minuteDiff < 0) ((minuteDiff += 60), (hourDiff -= 1))
  if (hourDiff < 0) ((hourDiff += 24), (dayDiff -= 1))

  if (dayDiff < 0) {
    const daysInPrevMonth = new Date(
      end.getFullYear(),
      end.getMonth(),
      0,
    ).getDate()
    dayDiff += daysInPrevMonth
    monthDiff -= 1
  }

  if (monthDiff < 0) ((monthDiff += 12), (yearDiff -= 1))

  return {
    years: yearDiff,
    months: monthDiff,
    days: dayDiff,
    hours: hourDiff,
    minutes: minuteDiff,
    seconds: secondDiff,
  }
}

export function Counter() {
  const [date, setDate] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, MS_PER_SECOND)
    return () => clearInterval(intervalId)
  }, [])

  const diff = getDiff(START, date)

  const totalMs = date.getTime() - START.getTime()
  const totalDays = Math.floor(totalMs / MS_PER_DAY)
  const totalHours = Math.floor(totalMs / MS_PER_HOUR)
  const heartbeats = Math.floor(
    (totalMs / MS_PER_MINUTE) * HEARTBEATS_PER_MINUTE,
  )

  const cards = [
    {
      id: 'years',
      label: plural(diff.years, 'Ano', 'Anos'),
      value: diff.years,
    },
    {
      id: 'months',
      label: plural(diff.months, 'Mês', 'Meses'),
      value: diff.months,
    },
    { id: 'days', label: plural(diff.days, 'Dia', 'Dias'), value: diff.days },
    {
      id: 'hours',
      label: plural(diff.hours, 'Hora', 'Horas'),
      value: pad(diff.hours),
    },
    {
      id: 'minutes',
      label: plural(diff.minutes, 'Minuto', 'Minutos'),
      value: pad(diff.minutes),
    },
    {
      id: 'seconds',
      label: plural(diff.seconds, 'Segundo', 'Segundos'),
      value: pad(diff.seconds),
    },
  ]

  return (
    <section className="counter">
      <div className="section-title">Nosso tempo juntos</div>

      <div className="cards">
        {cards.map(({ id, label, value }) => (
          <div className="card" key={id}>
            <span className="num">{value}</span>
            <span className="lbl">{label}</span>
          </div>
        ))}
      </div>

      <p className="totals">
        <b>{br(totalDays)}</b> dias · <b>{br(totalHours)}</b> horas
        <br />
        <b>{br(heartbeats)}</b> batidas do meu coração por você
      </p>
    </section>
  )
}
