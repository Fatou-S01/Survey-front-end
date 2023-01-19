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
  } from 'chart.js';
  import { Bar,Pie ,Line} from 'react-chartjs-2';
  
  const x = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','madre']//a prendre avec axios
  const y = [12, 19, 3, 5, 2, 3,8]//a prendre avec axios

  function generateRandomColors(n){
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
  );
  
const options = {
  indexAxis: 'x',
  responsive:true,
  legend:
  {
      display: false
  }
  };
  
  const data = {
  labels: x,
  datasets: [
    {
      data: y,
      backgroundColor: generateRandomColors(x.length),
      borderColor: '#A3A3A3',
      borderWidth: 1,
    },
  ],
  };
  
export{options,data}