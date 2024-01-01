
import React, {useState} from "react"


function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);



    const updateName = () => {
       setName("DLew");
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

     const toggleEmployed = () => {
        setisEmployed(!isEmployed)
    }

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Update Age</button>

                <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployed}>Is Employed</button>
            </div>

    )

}
export default MyComponent