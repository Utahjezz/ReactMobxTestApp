import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import BirdStore from '../stores/BirdStore';
import Birds from './Birds';

class App extends Component {
  render() {
    return(
      <Provider BirdStore={BirdStore}>
        <div className='row mt-5'>
          <div className='col-md-4  offset-md-1'>
            <Birds />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>Add a new bird</h2>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
