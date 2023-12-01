

import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('December 07, 2023 12:29:59 GMT'); // Set your target date and time
  const [remainingDays, setRemainingDays] = useState(calculateRemainingDays());

  function calculateRemainingDays() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;
    return Math.ceil(difference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingDays(calculateRemainingDays());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h2>Countdown</h2>
      {remainingDays<=1?<p>Kayamat ka din</p>:<p>Remaining Days: {remainingDays}</p>}
    </div>
  );
}

export default Countdown;
