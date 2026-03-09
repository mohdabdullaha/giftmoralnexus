import React from 'react'
import AppRouter from './routes/AppRouter'
import './index.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <AppRouter />
    </>
  )
}

export default App
