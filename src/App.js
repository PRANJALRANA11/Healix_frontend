import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const[transcribed_audio,set_transcribed_audio]=useState("");
  const [socket, setSocket] = useState(null);
  const [messageFromServer, setMessageFromServer] = useState('');
  useEffect(() => {
    
    const newSocket = new WebSocket('wss://text-to-speech-uajn.onrender.com/text');
    newSocket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
    });
    newSocket.addEventListener('message', (event) => {
      const message=event.data;
      console.log('Message from server:', event.data);
      setMessageFromServer(message);
    });

    newSocket.addEventListener('error', (event) => {
      console.error('WebSocket error:', event);
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.error('WebSocket not open. Message not sent.');
    }
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();


  useEffect(() => {
    // const socket=io('wss://text-to-speech-uajn.onrender.com/text');
    // socket.on('message',(data)=>{
      // console.log(data);
    // });
    if (!listening && transcript ) {
      // Call the function to send transcript via WebSocket
      // sendTranscriptToBackend(transcript);
      SpeechRecognition.startListening()
      sendMessage(transcript)
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
    {messageFromServer}
    </div>
  );
}

export default App;
