import React from 'react'
import Mind_Compo from './Mind_Compo';

export default function Exer_A() {
    const time = new Date();
    const url = "A-531mins.mp3";
    time.setSeconds(time.getSeconds() + 400);
    const expiryTimestamp = time;
  return (
    <div>
      <Mind_Compo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}
