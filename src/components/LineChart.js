// import React, { useState, useEffect } from 'react';
// import {Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement } from "chart.js"
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';

// ChartJS.register(CategoryScale,LinearScale,LineElement, PointElement )

// const LineChart = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         'https://api.covid19api.com/country/spain/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z',
//       );
//       console.log(result)
//       const labels = await result.data.map((item) => item.Date);
//       const values = await result.data.map((item) => item.Cases);

      
//       console.log(values)
//       console.log(labels)

//       setChartData({
//         labels: labels,
//         datasets: [
//           {
//             label: `${result.data.length} available`,
//             data: values,
//             fill: false,
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgba(255, 99, 132, 0.2)',
//           },
//         ],
//       });
//     };
//     fetchData();
//   }, []);

  



//   return (
//     <div>
//       <Line data={ chartData} height={400} options={options}/>
      
//     </div>
//   );
// };

// export default LineChart;
