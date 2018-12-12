import { StyleSheet } from 'aphrodite-jss';

export const dashboardStyles = StyleSheet.create({
  areaCharts: {
    overflow: 'hidden',
    '& div': {
      float: 'left',
      width: '50%'
    }
  }
});