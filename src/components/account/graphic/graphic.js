// External Dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Line } from 'react-chartjs-2';

// Internal Dependencies
import styles from './styles';

// Graphic Data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const Balance = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <Line
        data={data}
        height={250}
        options={{ maintainAspectRatio: false, legend: false }} />
    </div>
  );
}

export default Balance;