import React from 'react'
import PropTypes from 'prop-types'
import Button from 'app/stories/button'

export const Counter = ({ counter, increment }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {counter}</h2>
    <Button onClick={increment}>Hello Buttons</Button>
  </div>
)
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
}

export default Counter
