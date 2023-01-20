import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    LineController,
    BarController
  } from 'chart.js';
  import { Bar,Pie ,Line} from 'react-chartjs-2';

  
 
  // export const x = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','madre']//a prendre avec axios
  // export const y = [12, 19, 3, 5, 2, 3,8]//a prendre avec axios

  export function generateRandomColors(n){
    let randomColors = [];
    for (let i=0;i<n;i++){
      let maxVal = 0xFFFFFF;
      let randomNumber = Math.random() * maxVal; 
      randomNumber = Math.floor(randomNumber);
      randomNumber = randomNumber.toString(16);
      let randColor = randomNumber.padStart(6, 0);
      if(randomColors.includes(`#${randColor.toUpperCase()}`)){
        randomColors.push(`#${randomNumber.padStart(6, 0).toUpperCase()}`)
      }
      else{
        randomColors.push(`#${randColor.toUpperCase()}`)
      }
    }
    return randomColors
  }
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    LineController,
    BarController
  );

function manageDatasAndOptions(datasets){
  const options = {
    indexAxis: 'x',
    responsive:true,
    legend:
    {
        display: false
    }
    };
    
    const data = {
    labels: Object.keys(datasets.reponses),
    datasets: [
      {
        data: Object.values(datasets.reponses),
        backgroundColor: generateRandomColors(Object.keys(datasets.reponses).length),
        borderColor: '#A3A3A3',
        borderWidth: 1,
      },
    ],
    };

    return {options,data}
}

function moyenne(data){
    var sum = 0;
 
    data.forEach(function (item, idx) {
      sum += item;
    });
 
    // Returning the average of the numbers
    return sum / data.length;
}

function median (arr)  {
  const { length } = arr;
  
  arr.sort((a, b) => a - b);
  
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  
  return arr[(length - 1) / 2];
};


function ecart_type(arr){
  let mean = arr.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / arr.length;
  arr = arr.map((k)=>{
    return (k - mean) ** 2
  })
 let sum = arr.reduce((acc, curr)=> acc + curr, 0);
 let variance = sum / arr.length
 return Math.sqrt(sum / arr.length)
}

export{manageDatasAndOptions}