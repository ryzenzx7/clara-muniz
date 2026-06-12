import { useEffect, useState } from "react";

export default function useLoveCounter(startDate) {
  const [time, setTime] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const calculate = () => {
      const start = new Date(startDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      if (days < 0) {
        months--;

        const previousMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        );

        days += previousMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setTime({
        years,
        months,
        days,
      });
    };

    calculate();

    const interval = setInterval(
      calculate,
      1000
    );

    return () => clearInterval(interval);
  }, [startDate]);

  return time;
}