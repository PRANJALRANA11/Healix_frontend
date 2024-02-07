import React from 'react'
import Mind_Compo from './Mind_Compo';

export default function Exer_B() {
    const time = new Date();
    const url = "b-244.mp3";
    time.setSeconds(time.getSeconds() + 300);
    const expiryTimestamp = time;
  return (
    <div>
      <Mind_Compo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}