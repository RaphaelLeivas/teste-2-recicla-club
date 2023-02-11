/* eslint-disable no-param-reassign */
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import AppContext from './AppContext'
import { useStyles } from './AppStyles'
import Header from './components/Header/Header'
import Loading from './components/Loading/Loading'
import CompaniesRoute from './routes/Companies/CompaniesRoute'
import CompaniesForm from './routes/Companies/CompaniesForm/CompaniesForm'

const App: React.FC = () => {
  const classes = useStyles()
  const [title, setTitle] = React.useState<string>('Home')
  const [isShowLoading, setIsShowLoading] = React.useState<boolean>(false)

  const companiesRoute = (
    <Route path="companies" element={<CompaniesRoute />}>
      <Route path="" element={<Navigate to="form" />} />
      <Route path="form" element={<CompaniesForm />} />
    </Route>
  )

  const appContextProvider = React.useMemo(
    () => ({
      title,
      setTitle,
      setIsShowLoading,
    }),
    [title, setTitle, setIsShowLoading]
  )

  return (
    <AppContext.Provider value={appContextProvider}>
      <Loading isShowLoading={isShowLoading} />
      <div id="container" className={classes.body}>
        <Header />
        <main>
          <Routes>{[[companiesRoute]]}</Routes>
        </main>
      </div>
    </AppContext.Provider>
  )
}

export default App
