import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() { 


        const [name, setName] = useState('');
        const navigate = useNavigate();
        let rand_num = Math.random();
        let token = rand_num.toString();
        let pyqscore = "0";
        localStorage.setItem('token', token);
    
        const register = async (e) => {
            e.preventDefault();
            const data = {
                name: name,
                token: token,
                pyq_score: pyqscore

            }
            console.log(data);
            const res = await axios.post('https://text-to-speech-uajn.onrender.com/v1/cup/users/', data);
            console.log(res);
            if (res.status === 201) {
                navigate('/main');
            } else {
                alert('Registration failed');
            }
        }
        const handleChange = (e) => {
            setName(e.target.value);
        }

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Register
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="anonymous name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Anonymous Name</label>
                      <input  name="name" value={name} onChange={handleChange} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="racklepackle" required=""/>
                  </div> 
                  <button type="submit" onClick={register} class="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Done</button>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
