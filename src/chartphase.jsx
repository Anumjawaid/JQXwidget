import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import {Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


export default function LineChart1(){
return(
    <div>
    <div className='linechart'>
    <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            
            {
              label: 'Quantity',
              data: [47, 52, 67, 50, 9, 50],
              backgroundColor: 'orange',
              borderColor: 'red',
            },
          ],
        }}
       
        />
         </div>
    </div>
)
}