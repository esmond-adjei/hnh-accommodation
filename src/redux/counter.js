import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
   const dispatch = useDispatch();
   const count = useSelector((state) => state.counter.value);
   return (
     <div>
        <h1>Count: {count}</h1>

        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
     </div>
   );
}

export default Counter;
