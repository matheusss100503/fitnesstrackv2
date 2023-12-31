'use client'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Calendar from 'react-calendar'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const CalendarComponent = (userId: any) => {
  const [date, setDate] = useState<Value>()
  const router = useRouter()
  return (
    <div suppressHydrationWarning>
      <Calendar
        value={date}
        onChange={(value) => {
          setDate(value)
          const date = format(value as Date, 'yyyy-MM-dd')

          router.push(`/dashboard/${date}`)
        }}
        className="p-4 border border-white/40 rounded-3xl components-background"
        calendarType="gregory"
        formatShortWeekday={(locale, date) => format(date, 'eeeee')}
        next2Label={null}
        prev2Label={null}
      />
    </div>
  )
}

export default CalendarComponent
