import { StyleSheet } from 'aphrodite-jss';
import { blue } from './vars/colors';
import { defaultTransition } from './vars/transitions';

export const authStyles = StyleSheet.create({
  authForm: {
    width: '450px',
    background: '#fff',
    padding: '30px',
    border: '1px solid #ccc',
    margin: '50px auto',
    '@media screen and (max-width: 500px)': {
      width: '90%'
    },
    '& h1': {
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: '15px'
    },
    '& form': {
      '& label': {
        fontSize: '18px',
        display: 'block'
      },
      '& input': {
        width: '100%',
        display: 'block',
        height: '44px',
        border: '1px solid #ccc',
        padding: '0 15px',
        margin: '15px 0'
      },
      '& button': {
        background: blue,
        height: '44px',
        padding: '0 15px',
        border: 'none',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: defaultTransition,
        '&:hover': {
          background: '#3498db'
        }
      }
    }
  }
});