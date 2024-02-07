import React from 'react'
import Mind_Compo from './Mind_Compo';

export default function Exer_C() {
    const time = new Date();
    const url = "C-11.mp3";
    time.setSeconds(time.getSeconds() + 800);
    const expiryTimestamp = time;
  return (
    <div>
      <Mind_Compo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}