import React, { Component } from "react";

class Counter extends Component {


  render() {
    const { counter, onIncrement, onDelete } = this.props;

    return (
      <div>
        <span className={this.getBadgeClasses(counter)}>{this.formatCount(counter)}</span>
        <button
          onClick={() => onIncrement(counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = "badge m-2";
    classes += counter.value === 0 ? " badge-warning" : " badge-primary";
    return classes;
  }

  formatCount(counter) {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
