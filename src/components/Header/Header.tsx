import React from 'react'

import AppContext, { AppContextType } from '../../AppContext'
import { useStyles } from './HeaderStyles'

const Header: React.FC = () => {
  const classes = useStyles()
  const { title } = React.useContext(AppContext as React.Context<AppContextType>)

  return (
    <header className={classes.header} style={{ transition: 'padding-left 0.3s', paddingLeft: '15px' }}>
      <div className={classes.headerCustomContent}>
        <h1 className={classes.headerTitle}>{title}</h1>
      </div>
    </header>
  )
}

export default Header
