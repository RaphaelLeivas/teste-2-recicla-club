import React from 'react'

export interface AppContextType {
  title: string
  setTitle: (value: string) => void
  setIsShowLoading: (value: boolean) => void
}

const AppContext = React.createContext<AppContextType | null>(null)

export default AppContext
