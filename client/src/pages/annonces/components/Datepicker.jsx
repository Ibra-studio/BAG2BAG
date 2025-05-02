import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ReactComponent as Calendrier } from "@/assets/icons/CalendrierIcon.svg";

// Utilitaire pour concaténer les classes (si tu utilises Tailwind)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DatePicker({ className }) {
  const [date, setDate] = useState({
    from: new Date(), // Date du moment
    to: addDays(new Date(), 20), // 20 jours après la date du moment
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              "w-[300px] h-full bg-transparent text-black text-roboto shadow-none border-none px-0 justify-start text-left font-normal text-lg hover:bg-transparent",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-[30px] w-[30px]" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, yyyy")} -{" "}
                  {format(date.to, "LLL dd, yyyy")}
                </>
              ) : (
                format(date.from, "LLL dd, yyyy")
              )
            ) : (
              <span>Choisis une date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
