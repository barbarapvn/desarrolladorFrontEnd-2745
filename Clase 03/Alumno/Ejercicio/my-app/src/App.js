import React, { Component } from 'react'
import Header from './Header'
import './App.css'

class App extends Component {
  render () {
    const title = 'Mi primer título'
    return (
      <div className='App'>
        <header title={title} subtitle='Subtítulo' />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
