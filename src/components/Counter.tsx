import React, {useContext, useState} from "react";
import {CounterContext} from "../state/Counter";

export const Counter = () => {
    const {count, setCount} = useContext(CounterContext);
    // const [count, setCount] = useState<number>(0);

    return (
      <>
          {count}
          <button onClick={() => setCount(prevState => prevState+1)}>ぼたん</button>
      </>
  )
};