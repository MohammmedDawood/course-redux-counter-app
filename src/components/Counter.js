import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase By 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/* -------------------------------------------------------------------------- */
/*                            Class based component                           */
/* -------------------------------------------------------------------------- */
// import React, { Component } from "react";
// import { useSelector, useDispatch, connect } from "react-redux";
// export class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };
//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>

//         <button onClick={this.incrementHandler.bind()}>Increment</button>
//         <button onClick={this.decrementHandler.bind()}>Decrement</button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
