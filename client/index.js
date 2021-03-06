import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)



document.addEventListener('DOMContentLoaded', () => {
  const render = () => {
    ReactDOM.render(<App state={store.getState()} store={store}/>,
  document.getElementById('app'))
  }
  store.subscribe(render)
  render()
})
