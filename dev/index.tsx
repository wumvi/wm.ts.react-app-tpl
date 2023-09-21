import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { AppDev } from './AppDev'
import './index.scss'

const root = createRoot(document.getElementById('app-root') as HTMLElement)
root.render(<AppDev/>)
