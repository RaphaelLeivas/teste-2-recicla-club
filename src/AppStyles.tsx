import { Theme } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      display: 'flex',
      '& aside': {
        display: 'block',
        flexBasis: '300px',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      },
      '& main': {
        flex: 1,
        position: 'relative',
      },
      '& main::before': {
        content: '""',
        position: 'absolute',
        top: '0px',
        width: '100%',
        height: '249px',
        background: '#43b849',
        zIndex: -1,
      },
    },
  })
)
