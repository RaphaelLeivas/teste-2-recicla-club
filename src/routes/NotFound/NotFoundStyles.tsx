import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      height: 'calc(100vh - 112px)',
      padding: 0,
      position: 'relative',
    },
    info: {
      marginTop: '32px',
    },
  })
)

export default useStyles
