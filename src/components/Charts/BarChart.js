import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ dates, height, title, horizontal }) => {
  const food = [115, 51, 51, 231, 13, 151, 145];
  const other = [50, 52, 54, 56, 58, 60, 62];

  const config = {
    options: {
      chart: {
        background: '#fff',
        id: 'orders-stats-bar',
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: horizontal,
          dataLabels: {
            position: 'center'
          },
        }  
      },
      dataLabels: {
        formatter: (val, opt) => {
          return []
        }
      },
      xaxis: {
        categories: dates.map(a => a),
        labels: {
          show: false
        }
      },
      title: {
        text: title,
        style: {
          fontSize: '24px'
        }
      }
    },
    series: [
      {
        name: 'Food',
        data: food
      },
      {
        name: 'Other',
        data: other
      }
    ]
  };

  return <Chart
    options={config.options}
    series={config.series}
    type="bar"
    height={height} />;
};

export default BarChart;