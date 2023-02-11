import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { Theme } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
)

type LoadingProps = {
  isShowLoading: boolean
}

const Loading: React.FC<LoadingProps> = ({ isShowLoading }: LoadingProps) => {
  const classes = useStyles()

  return (
    <div>
      <Backdrop className={classes.backdrop} open={isShowLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Loading
