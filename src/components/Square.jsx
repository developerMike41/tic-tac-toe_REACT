import React from 'react';
import './../App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => {alert('click')}}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
