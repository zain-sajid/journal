import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';
import { communityRatio, maleAndFemaleRatio, scrapedMentalHealthData, scrapedMentalHealthData2 } from './mentalHealthData';
import './Stats.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Behavioural Mental Health Chart',
    },
  },
};
export const options2 = {
    responsive: true,
    plugins: {
            legend: {
            position: 'top',
        },
            title: {
            display: true,
            text: 'Drugs and Mental Health Abuse',
        },
    },
};

export const pieData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: '# of Votes',
        data: maleAndFemaleRatio,
        backgroundColor: [
          '#a86adb',
          '#caa3e9',
        ],
        borderColor: [
          '#a86adb',
          '#caa3e9',
        ],
        borderWidth: 1,
      },
    ],
  };

  export const pieData2 = {
    labels: ['Black', 'Hispanic', 'White'],
    datasets: [
      {
        label: '# of Votes',
        data: communityRatio,
        backgroundColor: [
            '#a86adb',
            '#caa3e9',
            '#ac0fdb',
        ],
        borderColor: [
            '#a86adb',
            '#caa3e9',
            '#ac0fdb',
        ],
        borderWidth: 1,
      },
    ],
  };


const labels = Array.from(Array(50).keys());

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: scrapedMentalHealthData,
      borderColor: '#a86adb',
      backgroundColor: '#a86adb',
    },
  ],
};

export const data2 = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: scrapedMentalHealthData2,
        borderColor: '#a86adb',
        backgroundColor: '#a86adb',
      },
    ],
  };

const Stats = () => {
  return (
      <div className="stats-contianer">
        <div className="both-charts-container">
            <div className="stats-charts-container">
                <Line options={options} data={data} />
            </div>
            <div className="stats-pie-container">
                <Pie data={pieData} />;
            </div>
        </div>
        <div className="both-charts-container">
            <div className="stats-charts-container">
                <Line options={options2} data={data2} />
            </div>
            <div className="stats-pie-container">
                <Pie data={pieData2} />;
            </div>
        </div>
      </div>
  );
}

export default Stats