import React from 'react';
import './App.css';
import Time from './components/Clock'


class App extends React.Component{
  state = {
    show: true,
  }
  render(){
    return(
      <div className="App">
        <p>CHRONOMETER:</p>
        {this.state.show === true &&
          <Time  />
        }
        {/* Botón para probar el componentWillUnmount */}
        <button onClick={() => this.setState({show: !this.state.show})}>
        {this.state.show === true?
          <span>Unmount</span>
        :
          <span>Mount</span>
        }
        </button>
      </div>
    )
  }
}


export default App;