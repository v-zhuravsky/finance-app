import React from 'react';
import { css } from 'aphrodite-jss';

import genAreaChartOptions from '../utils/genAreaChartOptions';

import Layout from './Layout';
import AreaChart from './Charts/AreaChart';
import BarChart from './Charts/BarChart';

import { statsStyles } from '../styles/Stats';

const Stats = () => {
  const dataOne = [101, 77, 46, 169, 128, 168, 110, 115, 51, 51, 231, 13, 151, 145, 164, 23, 137, 198, 206, 154, 192, 228, 33, 237, 224, 48, 44, 11, 286, 195];
  const dataTwo = [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94];
  const dataThree = [108, 121, 72, 83, 138, 66, 113, 128, 50, 26, 2, 44, 43, 56, 75, 195, 125, 42, 113, 88, 202, 149, 188, 152, 3, 99, 123, 245, 12, 186];
  const series = ['1/12/2018', '2/12/2018', '3/12/2018', '4/12/2018', '5/12/2018', '6/12/2018', '7/12/2018', '8/12/2018', '9/12/2018', '10/12/2018', '11/12/2018', '12/12/2018', '13/12/2018', '14/12/2018', '15/12/2018', '16/12/2018', '17/12/2018', '18/12/2018', '19/12/2018', '20/12/2018', '21/12/2018', '22/12/2018', '23/12/2018', '24/12/2018', '25/12/2018', '26/12/2018', '27/12/2018', '28/12/2018', '29/12/2018', '30/12/2018'];
  const week = ['8/12/2018', '9/12/2018', '10/12/2018', '11/12/2018', '12/12/2018', '13/12/2018', '14/12/2018'];

  let salesThisMonth = genAreaChartOptions(`$23423`, 'Public utilities', dataOne, series);
  let spendsThisMonth = genAreaChartOptions(`$2343`, 'Food', dataTwo, series);

  return (
    <Layout>
      <div className="left w70">
        <div className={css(statsStyles.areaCharts)}>
          <AreaChart height={150} width="100%" options={salesThisMonth} />
          <AreaChart height={150} width="100%" options={spendsThisMonth} />
        </div>
        <div className="white p20">
          <BarChart
            dates={week}
            horizontal={true}
            height={350}
            title="Last week spends for public utilities"
          />
        </div>
      </div>
      <div className="right w30">
        <div className="white p20">
          <BarChart
            dates={week}
            horizontal={false}
            height={300}
            title="Last week spends"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Stats;