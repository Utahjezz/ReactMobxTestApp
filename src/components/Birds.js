import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class Birds extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.BirdStore.addBird(this.birdInput.value);
    e.target.reset();
  };

  render() {

    const { BirdStore } = this.props;

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                ref={input => (this.birdInput = input)}
                placeholder="Add a bird"/>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        <ul>
          {BirdStore.birds.map(bird => {
              return(
                <li key={bird}>{bird}</li>
              )
          })}
        </ul>
      </div>
    );
  }
}

export default Birds;
