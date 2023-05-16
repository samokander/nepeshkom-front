import React, {
    ChangeEventHandler,
    useEffect,
    useRef,
    useState,
  } from "react";
  import { ru } from "date-fns/locale";
  import {
    format,
    isValid,
    parse,
    isAfter,
    isBefore,
  } from "date-fns";
  import {
    DayPicker,
    DateRange,
    SelectRangeEventHandler,
  } from "react-day-picker";
  import { usePopper } from "react-popper";
  import Image from "next/image";
  
  export default function CalendarRent(props) {
    const [selectedRange, setSelectedRange] =
      useState<DateRange>();
    const [fromValue, setFromValue] = useState<string>("");
    const [toValue, setToValue] = useState<Date>();
    const [isPopperOpen, setIsPopperOpen] = useState(false);
  
    const popperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
  
    const [popperElement, setPopperElement] =
      useState<HTMLDivElement | null>(null);
  
    const popper = usePopper(
      popperRef.current,
      popperElement,
      {
        placement: "top",
      }
    );

    const handleChangeDate = (e) => {
        
        setToValue(e)
        props.onChange(e)
    }
  
    useEffect(() => {
      if (!isPopperOpen) return;
      function handleClick(e: MouseEvent) {
        if (
          calendarRef.current &&
          !calendarRef.current.contains(e.target as Node)
        ) {
          closePopper();
        }
      }
      window.addEventListener("click", handleClick);
      // clean up
      return () =>
        window.removeEventListener("click", handleClick);
    }, [isPopperOpen]);
  
    const closePopper = () => {
      setIsPopperOpen(false);
      buttonRef?.current?.focus();
    };
  
  
    const handleButtonClick = () => {
      isPopperOpen ? closePopper() : setIsPopperOpen(true);
    };

  
    return (
      <div ref={calendarRef}>
        <div
          ref={popperRef}
          className="h-12 pl-5 flex flex-nowrap justify-around items-center bg-white border border-shadeofgrey rounded-tl-xl rounded-bl-xl font-raleway"
        >
          <input
            type="text"
            placeholder={props?.label}
            value={ toValue ? format(toValue, "dd.MM.yyyy") : null}
            className="w-[10rem] "
            // onChange={handleFromChange}
          />
          <a
            ref={buttonRef}
            type="button"
            className="bg-white hover:cursor-pointer mr-3"
            aria-label="Pick a date"
            onClick={handleButtonClick}
          >
            <Image
              src="/icons/Calendar.svg"
              alt="calendar icon"
              width={44}
              height={24}
            //   className="pl-3"
            />
          </a>
        </div>
        {isPopperOpen && (
          <div>
            <div
              tabIndex={-1}
              style={popper.styles.popper}
              className="dialog-sheet z-50"
              {...popper.attributes.popper}
              ref={setPopperElement}
              role="dialog"
            >
              <DayPicker
                initialFocus={isPopperOpen}
                mode="single"
                selected={toValue}
                onSelect={handleChangeDate}
                showOutsideDays
                className="text-white font-raleway"
                locale={ru}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
  