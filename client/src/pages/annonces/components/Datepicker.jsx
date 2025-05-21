// @ts-ignore
import React from "react";
// @ts-ignore
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

// @ts-ignore
import { Button } from "@/components/ui/button";
// @ts-ignore
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  // @ts-ignore
} from "@/components/ui/popover";
// @ts-ignore
import { ReactComponent as Calendrier } from "@/assets/icons/CalendrierIcon.svg";

// Utilitaire pour concaténer les classes (si tu utilises Tailwind)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DatePicker({ className, date, setDate }) {
  return (
    <div className={cn("grid gap-2 w-full ", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            className={cn(
              "xl:w-[300px]  w-full    h-full bg-transparent text-black text-roboto shadow-none border-none px-0 xl:!justify-start text-left font-normal text-lg hover:bg-transparent !flex !p-0   !justify-start   xl:ml-2 ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 !h-9 !w-9 text-[#525E87]" />
            {date?.from ? (
              date.to ? (
                <p className="text-Secondary">
                  {format(date.from, "LLL dd, yyyy")} -{" "}
                  {format(date.to, "LLL dd, yyyy")}
                </p>
              ) : (
                format(date.from, "LLL dd, yyyy")
              )
            ) : (
              <span>Choisis une date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 text-roboto " align="start">
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
