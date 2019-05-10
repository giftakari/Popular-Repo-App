import React from 'react'
import ReactDOM from 'react-dom'
import Pupolar from './components/Pupolar'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Pupolar/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)