import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Chat({messageFromServer,transcript}) {
  return (
    <>
    <div className='fixed  left-5 top-[10rem]'>
    <div class="w-[30vw] max-w-sm bg-white  border-gray-200  text-black  p-10 pt-[2rem] rounded-[3rem] shadow h-[auto] overflow-hidden">
      <p className='font-[2em] animation-spin'>
        
        <Typewriter
  options={{
    strings: [messageFromServer],
    autoStart: true,
    loop: true,
    delay:55
  }}
/>
      </p>
    </div>
  </div>
  <div class="fixed   right-5 top-[10rem] w-80">
  <div class="scroll-container scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-lg scrollbar-track-gray-100" style={{"overflowY":"auto","maxHeight":"45vh"}}>
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 card">
      <h5 class="card-title mb-2 text-2xl font-bold tracking-tight text-gray-900">Guidelines for Optimal Therapy Experience with Healix</h5>
      <p class=" font-normal text-gray-700  mb-4">
        Welcome to Healix! To ensure a successful and effective therapy experience, please follow these guidelines:
      </p>
      <p class="font-normal text-gray-700  mb-4">
        Find a Quiet Space: Choose a quiet and comfortable space for your therapy sessions. Minimize background noise to help you focus on the therapeutic conversation.
      </p>
      <p class="font-normal text-gray-700  mb-4">
        Use Quality Audio Equipment: For the best experience, use a headset or high-quality microphone and speakers. This will enhance the clarity of communication between you and the AI Voice Therapist.
      </p>
      <p class="font-normal text-gray-700  mb-4">
        Reliable Internet Connection: Ensure a stable internet connection to prevent disruptions during your therapy sessions. A strong connection contributes to a smoother and more productive conversation.
      </p>
      <p class="font-normal text-gray-700  mb-4">
        Set Realistic Goals: Clearly define your goals for therapy and communicate them to the AI Voice Therapist. This helps personalize the sessions and ensures the focus aligns with your needs.
      </p>
      <p class="font-normal text-gray-700  mb-4">
        Provide Honest Feedback: Share your thoughts and feelings openly with the AI Voice Therapist. Honest feedback helps fine-tune the therapeutic approach, making each session more tailored to your requirements.
      </p>
    </a>
  </div>
</div>

  </>
  )
}
