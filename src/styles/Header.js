import { StyleSheet } from 'aphrodite-jss';
import { blue } from './vars/colors';
import { defaultTransition } from './vars/transitions';

export const headerStyles = StyleSheet.create({
  header: {
    height: '55px',
    background: '#fff',
    borderBottom: '1px solid #ccc',
    overflow: 'hidden'
  },
  nav: {
    height: '54px',
    padding: '0 20px',
    float: 'left',
    width: '70%',
    overflow: 'hidden',
    '& a': {
      textDecoration: 'none',
      color: '#333',
      display: 'block',
      float: 'left',
      height: '54px',
      margin: 0,
      lineHeight: '54px',
      padding: '0 20px',
      transition: defaultTransition,
      '&:hover': {
        background: blue,
        color: '#fff'
      }
    }
  },
  section: {
    float: 'left',
    width: '30%',
    heigth: '54px',
    overflow: 'hidden',
    padding: '0 40px',
    background: blue,
    '& h3': {
      float: 'right',
      lineHeight: '54px',
      fontWeight: 'normal',
      marginRight: '20px',
      color: '#fff'
    },
    '& img': {
      heigth: '34px',
      width: '34px',
      margin: '10px',
      borderRadius: '50%',
      float: 'right'
    }
  }
});