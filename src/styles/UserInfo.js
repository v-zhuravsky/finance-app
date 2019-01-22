import { StyleSheet } from 'aphrodite-jss';

export const userInfoStyles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    '& img': {
      width: '125px',
      height: '125px',
      float: 'left'
    }
  },
  basicDetails: {
    float: 'right',
    height: '125px',
    width: 'calc(100% - 125px)',
    padding: '15px',
    '& h3': {
      fontWeight: 'normal',
      fontSize: '20px'
    },
    '& p': {
      marginTop: '15px'
    }
  }
});