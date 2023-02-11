import { Theme } from '@mui/material/styles'

import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: '64px',
      width: '100%',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: '8px',
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: 1,
      [theme.breakpoints.down('md')]: {
        paddingLeft: '16px',
      },
      '& > button': {
        margin: '0px 8px',
      },
      '& span': {
        color: '#FFF',
      },
    },
    headerCustomContent: {
      display: 'flex',
      alignItems: 'center',
    },
    headerTitle: {
      margin: '0',
      fontSize: '1.5rem',
      color: '#FFF',
      fontFamily: 'nunitoSemiBold',
    },
    headerLeft: {
      height: '32px',
      width: '32px',
      backgroundColor: '#FFF',
      borderRadius: '50%',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0px 8px',
      cursor: 'pointer',
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      '& > p': {
        color: '#FFF',
        padding: '4px 8px',
        border: '1px solid #FFF',
        display: 'flex',
        alignItens: 'center',
        cursor: 'pointer',
      },
    },
    listItem: {
      padding: '0px 16px',
    },
    branchButton: {
      background: 'transparent',
      outline: 'none',
      border: '2px solid #FFF',
      color: '#FFF',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
  })
)
