import React, { useEffect, useState } from 'react';

export default function Clock() {
   const [date, setDate] = useState(new Date());

   const refreshClock = () => {
      setDate(new Date());
   };

   useEffect(() => {
      const timerId = setInterval(() => {
         refreshClock();
      }, 1000);

      return () => clearInterval(timerId);
   }, []);

   return <span>{date.toLocaleTimeString()}</span>;
}
