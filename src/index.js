import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'

ReactDOM.render(
    <App>{console.log(`Build or ReBuild at ${new Date()}`)}</App>,
    document.getElementById('root')
)
