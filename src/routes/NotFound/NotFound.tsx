import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import React from 'react'

import useStyles from './NotFoundStyles'

const NotFound: React.FC = () => {
  const classes = useStyles()

  return (
    <Card className={classes.card} variant="outlined">
      <Grid className={classes.info} container direction="column" alignItems="center">
        <h2>Url não encontrada!</h2>
      </Grid>
    </Card>
  )
}

export default NotFound
