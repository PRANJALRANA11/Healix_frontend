import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState,useEffect } from 'react';
import './App.css';

function App() {

  const[transcribed_audio,set_transcribed_audio]=useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  useEffect(() => {
    if (!listening && transcript ) {
      // Call the function to send transcript via WebSocket
      // sendTranscriptToBackend(transcript);
      SpeechRecognition.startListening()
      console.log(transcript)
    }
  }, [transcript,listening]);

  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div>
    <p>Microphone: {listening ? 'on' : 'off'}</p>
    <button onClick={SpeechRecognition.startListening}>Start</button>
    <button onClick={SpeechRecognition.stopListening}>Stop</button>
    <button onClick={resetTranscript}>Reset</button>
    <p>{transcript}</p>
  </div>
  );
}

export default App;
