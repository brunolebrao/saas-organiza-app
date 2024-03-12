import { ptBR } from "date-fns/locale"
import { addMonths } from "date-fns"
import { Controller, useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react"
import { DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@heroicons/react/20/solid"

type DataRangeCalendar = {
  dataRange: DateRange
}

const CalendarForm = () => {
  const { handleSubmit, control, watch } = useForm<DataRangeCalendar>({
    values: {
      dataRange: {
        from: new Date(),
        to: addMonths(new Date(), 1)
      }
    }
  });


  const onSubmit = (data: DataRangeCalendar) => {
    console.log(data);
  };


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-[280px] justify-start text-left font-normal" id="date" variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {watch('dataRange.from')?.toLocaleDateString()} - {watch('dataRange.to')?.toLocaleDateString()}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        <Controller
          name="dataRange"
          control={control}
          defaultValue={undefined}
          render={({ field, formState }) => (
            <Calendar
              initialFocus
              mode="range"
              numberOfMonths={2}
              defaultMonth={formState.defaultValues?.dataRange?.from}
              selected={field.value} // Update the type of selected prop
              onSelect={field.onChange}
              onDayBlur={() => handleSubmit(onSubmit)()}
              locale={ptBR}
            />
          )}
        />
      </PopoverContent>
    </Popover>
  )
}

export default CalendarForm