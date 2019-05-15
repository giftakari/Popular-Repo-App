import React from 'react'
import ReactDOM from 'react-dom'
import Pupolar from './components/Pupolar'
import Battle from './components/Battle'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* //<Pupolar/> */}
        <Battle/>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)