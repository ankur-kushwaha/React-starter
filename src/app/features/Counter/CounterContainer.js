import { connect } from "react-redux";
import { increment } from "./actions";

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Counter from "./Counter";

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment(1));
  }
});

const mapStateToProps = (state) => ({
  counter: state.counterReducer.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
