
import React from 'react'
import { useState, useEffect } from 'react';

function useNewTimer(currentDate) {
    const [date, setDate] = React.useState(currentDate);
    React.useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    function tick() {
      setDate(new Date());
     }
    return date;
  }


  export default useNewTimer ;