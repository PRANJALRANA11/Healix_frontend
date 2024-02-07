import React from 'react'
import Mind_Compo from './Mind_Compo';

export default function Exer_E() {
    const time = new Date();
    const url = "E-4733.mp3";
    time.setSeconds(time.getSeconds() + 1000);
    const expiryTimestamp = time;
  return (
    <div>
      <Mind_Compo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}