
import React, {useState} from "react"


function Counter(){

    const [count, setCount] = useState(0);

    const reset = () => {
        setCount(0)
    }

    const increase = () => {
        setCount(count + 1)
    }

     const decrease = () => {
        setCount(count - 1)
    }

    return( <div className="classContainer">
                <p className="counter">{count}</p>

                <button className="btn" onClick={decrease}>Decrease Counter</button>
                <button className="btn" onClick={reset}>Reset Counter</button>
                <button className="btn" onClick={increase}>Increase Counter</button>
            </div>

    )

}
export default Counter