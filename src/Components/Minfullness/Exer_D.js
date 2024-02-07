import React from 'react'
import Mind_Compo from './Mind_Compo';

export default function Exer_D() {
    const time = new Date();
    const url = "D-2036.mp3";
    time.setSeconds(time.getSeconds() + 1000);
    const expiryTimestamp = time;
  return (
    <div>
      <Mind_Compo expiryTimestamp={expiryTimestamp} url={url}/>
    </div>
  )
}