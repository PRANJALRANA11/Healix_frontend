import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from "react-router-dom";

export default function Charts_Compo() {

  const navigate = useNavigate();
  const options_area = {
    chart: {
      type: 'area'
    },
    series: [
      {
        name: 'score',
        data: [1, 4, 5, 9, 10, 14, 15, 19, 20, 27]
      }
    ],
    xaxis: {
      categories: [1,2,3,4,5,6,7,8,9,10]
    },
    stroke: {
      curve: 'smooth',
      colors: ['#1A56DB'], // Line color
      width: 4, // Line width
      dashArray: [0, 8], // Dash array for dashed lines
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 100]
      }
    },
  };
  const options_pie = {
    chart: {
      type: 'pie',
    },
    labels: ['Depression Detected', 'Anxiety Detected', 'Stress Detected', 'Nothing Detected'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series_pie = [44, 55, 13, 43, 22];

  const options_prog = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
        dataLabels: {
          show: true,
          name: {
            fontSize: '16px',
            offsetY: -10,
          },
          value: {
            fontSize: '14px',
            offsetY: 5,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    labels: ['Progress'],
  };

  const series_prog = [70]; // Progress value (percentage)


  return (
    <div  className=''>
        <div className='flex ml-40'>
        <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5 mr-4">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">12 Thurs 2023</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Your Last Session</p>
    </div>
  </div>
  <button type="button" onClick={()=>navigate('/main')} class="text-white w-40 ml-40 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Start New Session</button>
  </div>
        <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5 mr-4">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4 hrs</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">attended</p>
    </div>
  </div>
  <button type="button" onClick={()=>navigate('/main')} class="text-white w-40 ml-40 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Start New Session</button>
  </div>
        <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5 mr-4">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">10</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">sessions attended</p>
    </div>
  </div>
  <button type="button" onClick={()=>navigate('/main')} class="text-white w-40 ml-40 mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Start New Session</button>
  </div>
  </div>
        <div className='w-[60vw] mt-10 ml-72 p-10 bg-white rounded-lg shadow'>
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1 mb-5">Phq9 Analysis</h5>
      <ReactApexChart options={options_area} series={options_area.series} type="area" height={350}  />
      <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">27</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Last Score</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  </div>
      </div>
      <div  className='w-[60vw] mt-10 ml-72 p-10 bg-white rounded-lg shadow'>
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1 mb-5">Conversational Analysis</h5>
      <ReactApexChart options={options_pie} series={series_pie} type="pie" height={350} />
      <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32 %</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Depression Detected</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  </div>
      </div>
      <div  className='w-[60vw] mt-10 ml-72 p-10 bg-white rounded-lg shadow'>
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1 mb-5">Overall Progress</h5>
      <ReactApexChart options={options_prog} series={series_prog} type="radialBar" height={350} />
      <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-5">
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">70 %</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Progress this week</p>
    </div>
    <div
      class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  </div>
      </div>
    </div>
  );
}
